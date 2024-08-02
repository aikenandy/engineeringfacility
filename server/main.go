package main

import (
	"encoding/json"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

type Feature struct {
	Type     string `json:"type"`
	Geometry struct {
		Type        string     `json:"type"`
		Coordinates [2]float64 `json:"coordinates"`
	} `json:"geometry"`
	Properties struct {
		Name string `json:"name"`
	} `json:"properties"`
}

type GeoJSON struct {
	Type     string    `json:"type"`
	Features []Feature `json:"features"`
}

func main() {
	r := gin.Default()
	r.Use(corsMiddleware())

	r.Static("/static", "./dist/static")

	// Load GeoJSON data
	var knustGeoJson GeoJSON
	file, err := os.Open("./server/buildingstogeojson.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&knustGeoJson)
	if err != nil {
		panic(err)
	}

	// Endpoint for search suggestions
	r.GET("/search/suggestions", func(c *gin.Context) {
		query := c.Query("query")
		results := []Feature{}
		for _, feature := range knustGeoJson.Features {
			if containsIgnoreCase(feature.Properties.Name, query) {
				results = append(results, feature)
			}
		}
		c.JSON(http.StatusOK, results)
	})

	// Serve the frontend application
	r.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})

	r.Run(":8080")
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token")
		c.Next()
	}
}

func containsIgnoreCase(s, substr string) bool {
	return strings.Contains(strings.ToLower(s), strings.ToLower(substr))
}

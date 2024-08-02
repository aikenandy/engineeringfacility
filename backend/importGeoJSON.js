// backend/importGeoJSON.js
import pkg from 'pg';
import { Client } from 'pg';
import { readFileSync } from 'fs';


const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function importGeoJSON() {
  await client.connect();

  const geojson = JSON.parse(readFileSync('./buildings_FeaturesToJSON2.geojson', 'utf8'));

  for (const feature of geojson.features) {
    const { properties, geometry } = feature;
    const { name, fans, airConditioners, chairs, tables, projectors, lightBulbs } = properties;
    const [longitude, latitude] = geometry.coordinates;

    await client.query(
      `INSERT INTO Building (name, latitude, longitude, fans, airConditioners, chairs, tables, projectors, lightBulbs) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [name, latitude, longitude, fans, airConditioners, chairs, tables, projectors, lightBulbs]
    );
  }

  await client.end();
}

importGeoJSON().catch(err => {
  console.error('Error importing GeoJSON:', err);
  process.exit(1);
});

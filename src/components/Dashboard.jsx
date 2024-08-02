// src/components/Dashboard.jsx
import { useEffect, useState } from 'react';
import { getReports } from '../mockDatabase';

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch the reports from the mock database
    setReports(getReports());
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Facility Manager Dashboard</h1>
      <ul className="space-y-4">
        {reports.map((report) => (
          <li key={report.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
            <p><strong>Student ID:</strong> {report.studentId}</p>
            <p><strong>Date:</strong> {new Date(report.date).toLocaleString()}</p>
            <p><strong>Issue:</strong> {report.issueDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

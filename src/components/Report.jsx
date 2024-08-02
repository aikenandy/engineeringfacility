// src/components/ReportForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { addReport, getStudents } from '../mockDatabase';

const Report = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = getStudents();
    const student = students.find(student => student.name === name && student.course === course);

    if (student) {
      addReport({
        id: Date.now(), // Generate a unique ID
        studentId: student.id,
        date: new Date(),
        issueDescription,
      });
      alert('Report submitted successfully');
      logout(); // Log out the student
      navigate('/'); // Redirect to the homepage or login page
    } else {
      alert('Student not found');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Submit Facility Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Course of Study</label>
          <input
            type="text"
            placeholder="Enter your course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Issue Description</label>
          <textarea
            placeholder="Describe the issue"
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32 resize-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default Report;

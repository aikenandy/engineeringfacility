// src/mockDatabase.js
let students = [
    { id: 1, name: 'John Doe', course: 'Geomatic Engineering' },
    { id: 2, name: 'Jane Smith', course: 'Electrical Engineering' },
    { id: 3, name: 'Daniel James ', course: 'Biomedical Engineering' },
    { id: 4, name: 'Emmanuella Osei', course: 'Materials Engineering' },
    { id: 5, name: 'Chris Bosh', course: 'Chemical Engineering' },
    { id: 6, name: 'Andrews Aiken', course: 'Petroleum Engineering' },
  ];
  
  let reports = [
    { id: 1, studentId: 1, date: new Date(), issueDescription: 'Broken air conditioner in room 101' },
    { id: 2, studentId: 2, date: new Date(), issueDescription: 'Faulty projector in lecture hall Pb 201' },
    { id: 3, studentId: 3, date: new Date(), issueDescription: 'Faulty projector in lecture hall' },
    { id: 4, studentId: 4, date: new Date(), issueDescription: 'Faulty projector in lecture hall' },
    { id: 5, studentId: 5, date: new Date(), issueDescription: 'Faulty projector in lecture hall' },
    { id: 6, studentId: 6, date: new Date(), issueDescription: 'Faulty projector in lecture hall' },
  ];
  
  export const getStudents = () => students;
  export const getReports = () => reports;
  
  export const addReport = (report) => {
    reports.push(report);
  };
  
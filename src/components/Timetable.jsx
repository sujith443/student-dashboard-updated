import React from "react";
import { useAuth } from "./Authentication";

const Timetable = () => {
  const { user } = useAuth();
  
  // Get student's branch and section from user data
  const branch = user?.data?.user?.branch || "ECE"; // Default to ECE if not found
  const section = user?.data?.user?.section || "A"; // Default to A if not found

  // Time slots mapping for periods
  const timeSlots = {
    1: { start: "9:00 AM", end: "10:00 AM" },
    2: { start: "10:00 AM", end: "11:00 AM" },
    3: { start: "11:15 AM", end: "12:15 PM" },
    4: { start: "12:15 PM", end: "1:15 PM" },
    5: { start: "2:00 PM", end: "3:00 PM" },
    6: { start: "3:00 PM", end: "4:00 PM" },
    7: { start: "4:00 PM", end: "4:30 PM" }
  };

  // Days of the week
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // DEMO TIMETABLE DATA - This would normally come from backend
  const demoTimetableData = {
    // ECE Branch - Section A
    "ECE-A": [
      // Monday
      { day: "Monday", period: 1, subject: "Microprocessors", faculty: "Dr. Rajan Verma", room: "ECE-401" },
      { day: "Monday", period: 2, subject: "Digital Signal Processing", faculty: "Dr. Priya Sharma", room: "ECE-401" },
      { day: "Monday", period: 3, subject: "Antenna Theory", faculty: "Prof. Sunil Kumar", room: "ECE-401" },
      { day: "Monday", period: 4, subject: "Communication Systems", faculty: "Dr. Meera Gupta", room: "ECE-401" },
      { day: "Monday", period: 5, subject: "VLSI Design", faculty: "Dr. Anil Srivastava", room: "ECE-401" },
      { day: "Monday", period: 6, subject: "Technical Seminar", faculty: "Dr. Rajiv Mishra", room: "Seminar Hall" },
      { day: "Monday", period: 7, subject: "Industry Mentoring", faculty: "Prof. Anita Desai", room: "ECE-Library" },
      
      // Tuesday
      { day: "Tuesday", period: 1, subject: "Digital Signal Processing", faculty: "Dr. Priya Sharma", room: "ECE-401" },
      { day: "Tuesday", period: 2, subject: "VLSI Design", faculty: "Dr. Anil Srivastava", room: "ECE-401" },
      { day: "Tuesday", period: 3, subject: "Digital Signal Processing Lab", faculty: "Dr. Priya Sharma", room: "ECE-Lab2" },
      { day: "Tuesday", period: 4, subject: "Digital Signal Processing Lab", faculty: "Dr. Priya Sharma", room: "ECE-Lab2" },
      { day: "Tuesday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Tuesday", period: 6, subject: "Career Counseling", faculty: "Prof. Sanjay Mehta", room: "CCR" },
      { day: "Tuesday", period: 7, subject: "Library Hour", faculty: "College Librarian", room: "Central Library" },
      
      // Wednesday
      { day: "Wednesday", period: 1, subject: "Antenna Theory", faculty: "Prof. Sunil Kumar", room: "ECE-401" },
      { day: "Wednesday", period: 2, subject: "Communication Systems", faculty: "Dr. Meera Gupta", room: "ECE-401" },
      { day: "Wednesday", period: 3, subject: "Microprocessors", faculty: "Dr. Rajan Verma", room: "ECE-401" },
      { day: "Wednesday", period: 4, subject: "VLSI Design Lab", faculty: "Dr. Anil Srivastava", room: "ECE-Lab3" },
      { day: "Wednesday", period: 5, subject: "VLSI Design Lab", faculty: "Dr. Anil Srivastava", room: "ECE-Lab3" },
      { day: "Wednesday", period: 6, subject: "Soft Skills Training", faculty: "Dr. Preethi Menon", room: "Language Lab" },
      { day: "Wednesday", period: 7, subject: "Sports Hour", faculty: "Physical Education Dept", room: "Sports Ground" },
      
      // Thursday
      { day: "Thursday", period: 1, subject: "Communication Systems", faculty: "Dr. Meera Gupta", room: "ECE-401" },
      { day: "Thursday", period: 2, subject: "Microprocessors", faculty: "Dr. Rajan Verma", room: "ECE-401" },
      { day: "Thursday", period: 3, subject: "Microprocessors Lab", faculty: "Dr. Rajan Verma", room: "ECE-Lab1" },
      { day: "Thursday", period: 4, subject: "Microprocessors Lab", faculty: "Dr. Rajan Verma", room: "ECE-Lab1" },
      { day: "Thursday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Thursday", period: 6, subject: "Research Methodology", faculty: "Dr. Naresh Kumar", room: "Research Center" },
      { day: "Thursday", period: 7, subject: "Student Chapter Meeting", faculty: "IEEE Coordinator", room: "IEEE Room" },
      
      // Friday
      { day: "Friday", period: 1, subject: "VLSI Design", faculty: "Dr. Anil Srivastava", room: "ECE-401" },
      { day: "Friday", period: 2, subject: "Antenna Theory", faculty: "Prof. Sunil Kumar", room: "ECE-401" },
      { day: "Friday", period: 3, subject: "Communication Systems Lab", faculty: "Dr. Meera Gupta", room: "ECE-Lab4" },
      { day: "Friday", period: 4, subject: "Communication Systems Lab", faculty: "Dr. Meera Gupta", room: "ECE-Lab4" },
      { day: "Friday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Friday", period: 6, subject: "Placement Training", faculty: "Training & Placement Cell", room: "T&P Office" },
      { day: "Friday", period: 7, subject: "Cultural Activities", faculty: "Cultural Committee", room: "Auditorium" }
    ],
    
    // ECE Branch - Section B
    "ECE-B": [
      // Monday
      { day: "Monday", period: 1, subject: "VLSI Design", faculty: "Dr. Anil Srivastava", room: "ECE-402" },
      { day: "Monday", period: 2, subject: "Microprocessors", faculty: "Dr. Rajan Verma", room: "ECE-402" },
      { day: "Monday", period: 3, subject: "Digital Signal Processing", faculty: "Dr. Priya Sharma", room: "ECE-402" },
      { day: "Monday", period: 4, subject: "Antenna Theory", faculty: "Prof. Sunil Kumar", room: "ECE-402" },
      { day: "Monday", period: 5, subject: "Communication Systems", faculty: "Dr. Meera Gupta", room: "ECE-402" },
      { day: "Monday", period: 6, subject: "Industry Mentoring", faculty: "Prof. Anita Desai", room: "ECE-Library" },
      { day: "Monday", period: 7, subject: "Technical Seminar", faculty: "Dr. Rajiv Mishra", room: "Seminar Hall" },
      
      // Tuesday
      { day: "Tuesday", period: 1, subject: "Antenna Theory", faculty: "Prof. Sunil Kumar", room: "ECE-402" },
      { day: "Tuesday", period: 2, subject: "Communication Systems", faculty: "Dr. Meera Gupta", room: "ECE-402" },
      { day: "Tuesday", period: 3, subject: "Microprocessors Lab", faculty: "Dr. Rajan Verma", room: "ECE-Lab1" },
      { day: "Tuesday", period: 4, subject: "Microprocessors Lab", faculty: "Dr. Rajan Verma", room: "ECE-Lab1" },
      { day: "Tuesday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Tuesday", period: 6, subject: "Library Hour", faculty: "College Librarian", room: "Central Library" },
      { day: "Tuesday", period: 7, subject: "Career Counseling", faculty: "Prof. Sanjay Mehta", room: "CCR" },
      
      // Wednesday
      { day: "Wednesday", period: 1, subject: "Digital Signal Processing", faculty: "Dr. Priya Sharma", room: "ECE-402" },
      { day: "Wednesday", period: 2, subject: "VLSI Design", faculty: "Dr. Anil Srivastava", room: "ECE-402" },
      { day: "Wednesday", period: 3, subject: "Communication Systems", faculty: "Dr. Meera Gupta", room: "ECE-402" },
      { day: "Wednesday", period: 4, subject: "Communication Systems Lab", faculty: "Dr. Meera Gupta", room: "ECE-Lab4" },
      { day: "Wednesday", period: 5, subject: "Communication Systems Lab", faculty: "Dr. Meera Gupta", room: "ECE-Lab4" },
      { day: "Wednesday", period: 6, subject: "Sports Hour", faculty: "Physical Education Dept", room: "Sports Ground" },
      { day: "Wednesday", period: 7, subject: "Soft Skills Training", faculty: "Dr. Preethi Menon", room: "Language Lab" },
      
      // Thursday
      { day: "Thursday", period: 1, subject: "Microprocessors", faculty: "Dr. Rajan Verma", room: "ECE-402" },
      { day: "Thursday", period: 2, subject: "Digital Signal Processing", faculty: "Dr. Priya Sharma", room: "ECE-402" },
      { day: "Thursday", period: 3, subject: "VLSI Design Lab", faculty: "Dr. Anil Srivastava", room: "ECE-Lab3" },
      { day: "Thursday", period: 4, subject: "VLSI Design Lab", faculty: "Dr. Anil Srivastava", room: "ECE-Lab3" },
      { day: "Thursday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Thursday", period: 6, subject: "Student Chapter Meeting", faculty: "IEEE Coordinator", room: "IEEE Room" },
      { day: "Thursday", period: 7, subject: "Research Methodology", faculty: "Dr. Naresh Kumar", room: "Research Center" },
      
      // Friday
      { day: "Friday", period: 1, subject: "Antenna Theory", faculty: "Prof. Sunil Kumar", room: "ECE-402" },
      { day: "Friday", period: 2, subject: "VLSI Design", faculty: "Dr. Anil Srivastava", room: "ECE-402" },
      { day: "Friday", period: 3, subject: "Digital Signal Processing Lab", faculty: "Dr. Priya Sharma", room: "ECE-Lab2" },
      { day: "Friday", period: 4, subject: "Digital Signal Processing Lab", faculty: "Dr. Priya Sharma", room: "ECE-Lab2" },
      { day: "Friday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Friday", period: 6, subject: "Cultural Activities", faculty: "Cultural Committee", room: "Auditorium" },
      { day: "Friday", period: 7, subject: "Placement Training", faculty: "Training & Placement Cell", room: "T&P Office" }
    ],
    
    // CSE Branch - Section A
    "CSE-A": [
      // Monday
      { day: "Monday", period: 1, subject: "Advanced Algorithms", faculty: "Dr. Rahul Jain", room: "CSE-401" },
      { day: "Monday", period: 2, subject: "Machine Learning", faculty: "Dr. Deepa Mehta", room: "CSE-401" },
      { day: "Monday", period: 3, subject: "Web Technologies", faculty: "Prof. Rajesh Kumar", room: "CSE-401" },
      { day: "Monday", period: 4, subject: "Database Systems", faculty: "Dr. Sanjay Gupta", room: "CSE-401" },
      { day: "Monday", period: 5, subject: "Cloud Computing", faculty: "Dr. Anjali Singh", room: "CSE-401" },
      { day: "Monday", period: 6, subject: "Technical Writing", faculty: "Dr. Nandita Sharma", room: "Language Lab" },
      { day: "Monday", period: 7, subject: "Competitive Coding", faculty: "Prof. Vihan Khanna", room: "Computer Center" },
      
      // Tuesday
      { day: "Tuesday", period: 1, subject: "Machine Learning", faculty: "Dr. Deepa Mehta", room: "CSE-401" },
      { day: "Tuesday", period: 2, subject: "Cloud Computing", faculty: "Dr. Anjali Singh", room: "CSE-401" },
      { day: "Tuesday", period: 3, subject: "Machine Learning Lab", faculty: "Dr. Deepa Mehta", room: "CSE-Lab2" },
      { day: "Tuesday", period: 4, subject: "Machine Learning Lab", faculty: "Dr. Deepa Mehta", room: "CSE-Lab2" },
      { day: "Tuesday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Tuesday", period: 6, subject: "Mock Interviews", faculty: "T&P Cell", room: "Interview Hall" },
      { day: "Tuesday", period: 7, subject: "Open Source Contributions", faculty: "Dr. Rohit Verma", room: "Open Lab" },
      
      // Wednesday
      { day: "Wednesday", period: 1, subject: "Web Technologies", faculty: "Prof. Rajesh Kumar", room: "CSE-401" },
      { day: "Wednesday", period: 2, subject: "Database Systems", faculty: "Dr. Sanjay Gupta", room: "CSE-401" },
      { day: "Wednesday", period: 3, subject: "Advanced Algorithms", faculty: "Dr. Rahul Jain", room: "CSE-401" },
      { day: "Wednesday", period: 4, subject: "Web Technologies Lab", faculty: "Prof. Rajesh Kumar", room: "CSE-Lab3" },
      { day: "Wednesday", period: 5, subject: "Web Technologies Lab", faculty: "Prof. Rajesh Kumar", room: "CSE-Lab3" },
      { day: "Wednesday", period: 6, subject: "Hackathon Prep", faculty: "Dr. Ravi Shankar", room: "Innovation Lab" },
      { day: "Wednesday", period: 7, subject: "Industry Connect", faculty: "Guest Lectures", room: "Auditorium" },
      
      // Thursday
      { day: "Thursday", period: 1, subject: "Database Systems", faculty: "Dr. Sanjay Gupta", room: "CSE-401" },
      { day: "Thursday", period: 2, subject: "Advanced Algorithms", faculty: "Dr. Rahul Jain", room: "CSE-401" },
      { day: "Thursday", period: 3, subject: "Database Systems Lab", faculty: "Dr. Sanjay Gupta", room: "CSE-Lab1" },
      { day: "Thursday", period: 4, subject: "Database Systems Lab", faculty: "Dr. Sanjay Gupta", room: "CSE-Lab1" },
      { day: "Thursday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Thursday", period: 6, subject: "Technical Paper Writing", faculty: "Dr. Asha Reddy", room: "Research Lab" },
      { day: "Thursday", period: 7, subject: "ACM Chapter Activities", faculty: "ACM Coordinator", room: "ACM Room" },
      
      // Friday
      { day: "Friday", period: 1, subject: "Cloud Computing", faculty: "Dr. Anjali Singh", room: "CSE-401" },
      { day: "Friday", period: 2, subject: "Web Technologies", faculty: "Prof. Rajesh Kumar", room: "CSE-401" },
      { day: "Friday", period: 3, subject: "Cloud Computing Lab", faculty: "Dr. Anjali Singh", room: "CSE-Lab4" },
      { day: "Friday", period: 4, subject: "Cloud Computing Lab", faculty: "Dr. Anjali Singh", room: "CSE-Lab4" },
      { day: "Friday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Friday", period: 6, subject: "Placement Preparation", faculty: "T&P Cell", room: "T&P Office" },
      { day: "Friday", period: 7, subject: "Ethics in Computing", faculty: "Dr. Mahesh Yadav", room: "CSE Seminar Hall" }
    ],
    
    // CSE Branch - Section B
    "CSE-B": [
      // Monday
      { day: "Monday", period: 1, subject: "Cloud Computing", faculty: "Dr. Anjali Singh", room: "CSE-402" },
      { day: "Monday", period: 2, subject: "Advanced Algorithms", faculty: "Dr. Rahul Jain", room: "CSE-402" },
      { day: "Monday", period: 3, subject: "Machine Learning", faculty: "Dr. Deepa Mehta", room: "CSE-402" },
      { day: "Monday", period: 4, subject: "Web Technologies", faculty: "Prof. Rajesh Kumar", room: "CSE-402" },
      { day: "Monday", period: 5, subject: "Database Systems", faculty: "Dr. Sanjay Gupta", room: "CSE-402" },
      { day: "Monday", period: 6, subject: "Competitive Coding", faculty: "Prof. Vihan Khanna", room: "Computer Center" },
      { day: "Monday", period: 7, subject: "Technical Writing", faculty: "Dr. Nandita Sharma", room: "Language Lab" },
      
      // Tuesday to Friday (similar pattern with variations)
      { day: "Tuesday", period: 1, subject: "Web Technologies", faculty: "Prof. Rajesh Kumar", room: "CSE-402" },
      { day: "Tuesday", period: 2, subject: "Database Systems", faculty: "Dr. Sanjay Gupta", room: "CSE-402" },
      { day: "Tuesday", period: 3, subject: "Database Systems Lab", faculty: "Dr. Sanjay Gupta", room: "CSE-Lab1" },
      { day: "Tuesday", period: 4, subject: "Database Systems Lab", faculty: "Dr. Sanjay Gupta", room: "CSE-Lab1" },
      { day: "Tuesday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Tuesday", period: 6, subject: "Open Source Contributions", faculty: "Dr. Rohit Verma", room: "Open Lab" },
      { day: "Tuesday", period: 7, subject: "Mock Interviews", faculty: "T&P Cell", room: "Interview Hall" },
      
      // Wednesday (additional days follow similar pattern)
      { day: "Wednesday", period: 1, subject: "Machine Learning", faculty: "Dr. Deepa Mehta", room: "CSE-402" },
      { day: "Wednesday", period: 2, subject: "Cloud Computing", faculty: "Dr. Anjali Singh", room: "CSE-402" },
      { day: "Wednesday", period: 3, subject: "Database Systems", faculty: "Dr. Sanjay Gupta", room: "CSE-402" },
      { day: "Wednesday", period: 4, subject: "Cloud Computing Lab", faculty: "Dr. Anjali Singh", room: "CSE-Lab4" },
      { day: "Wednesday", period: 5, subject: "Cloud Computing Lab", faculty: "Dr. Anjali Singh", room: "CSE-Lab4" },
      { day: "Wednesday", period: 6, subject: "Industry Connect", faculty: "Guest Lectures", room: "Auditorium" },
      { day: "Wednesday", period: 7, subject: "Hackathon Prep", faculty: "Dr. Ravi Shankar", room: "Innovation Lab" }
    ],
    
    // CIVIL Branch - Section A
    "CIVIL-A": [
      // Monday
      { day: "Monday", period: 1, subject: "Structural Analysis", faculty: "Dr. Vikram Reddy", room: "CIVIL-401" },
      { day: "Monday", period: 2, subject: "Geotechnical Engineering", faculty: "Dr. Neha Sharma", room: "CIVIL-401" },
      { day: "Monday", period: 3, subject: "Environmental Engineering", faculty: "Prof. Mohan Rao", room: "CIVIL-401" },
      { day: "Monday", period: 4, subject: "Transportation Engineering", faculty: "Dr. Prakash Verma", room: "CIVIL-401" },
      { day: "Monday", period: 5, subject: "Construction Management", faculty: "Dr. Sunita Patel", room: "CIVIL-401" },
      { day: "Monday", period: 6, subject: "Professional Ethics", faculty: "Dr. Anand Mishra", room: "Seminar Hall" },
      { day: "Monday", period: 7, subject: "CAD Training", faculty: "Prof. Rajiv Kumar", room: "CAD Lab" },
      
      // Tuesday
      { day: "Tuesday", period: 1, subject: "Geotechnical Engineering", faculty: "Dr. Neha Sharma", room: "CIVIL-401" },
      { day: "Tuesday", period: 2, subject: "Construction Management", faculty: "Dr. Sunita Patel", room: "CIVIL-401" },
      { day: "Tuesday", period: 3, subject: "Geotechnical Lab", faculty: "Dr. Neha Sharma", room: "CIVIL-Lab2" },
      { day: "Tuesday", period: 4, subject: "Geotechnical Lab", faculty: "Dr. Neha Sharma", room: "CIVIL-Lab2" },
      { day: "Tuesday", period: 5, subject: "Project Work", faculty: "Various Guides", room: "Project Lab" },
      { day: "Tuesday", period: 6, subject: "Site Visits Preparation", faculty: "Dr. Vikram Reddy", room: "CIVIL-401" },
      { day: "Tuesday", period: 7, subject: "Technical Sketching", faculty: "Prof. Sangeetha R", room: "Drawing Hall" },
      
      // Wednesday to Friday with variety of subjects and activities
      { day: "Wednesday", period: 1, subject: "Environmental Engineering", faculty: "Prof. Mohan Rao", room: "CIVIL-401" },
      { day: "Wednesday", period: 2, subject: "Transportation Engineering", faculty: "Dr. Prakash Verma", room: "CIVIL-401" },
      { day: "Wednesday", period: 3, subject: "Structural Analysis", faculty: "Dr. Vikram Reddy", room: "CIVIL-401" },
      { day: "Wednesday", period: 4, subject: "Environmental Lab", faculty: "Prof. Mohan Rao", room: "CIVIL-Lab3" },
      { day: "Wednesday", period: 5, subject: "Environmental Lab", faculty: "Prof. Mohan Rao", room: "CIVIL-Lab3" },
      { day: "Wednesday", period: 6, subject: "Guest Lecture", faculty: "Industry Experts", room: "Auditorium" },
      { day: "Wednesday", period: 7, subject: "Library Research", faculty: "Dr. Anand Mishra", room: "Central Library" }
    ]
  };

  // Get the appropriate timetable data based on student's branch and section
  const branchSectionKey = `${branch}-${section}`;
  const timetableData = demoTimetableData[branchSectionKey] || [];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Weekly Timetable</h2>
      <h5 className="text-center mb-3">Branch: {branch} | Section: {section}</h5>
      
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Time</th>
              {weekdays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(timeSlots).map(([period, times]) => (
              <tr key={period}>
                <td>
                  <strong>{times.start} - {times.end}</strong>
                  <div className="small">Period {period}</div>
                </td>
                
                {weekdays.map((day) => {
                  const classInfo = timetableData.find(
                    (item) => item.day === day && item.period === parseInt(period)
                  );
                  
                  return (
                    <td key={`${day}-${period}`} className={classInfo?.subject?.includes("Lab") ? "table-info" : ""}>
                      {classInfo ? (
                        <>
                          <div><strong>{classInfo.subject}</strong></div>
                          <div className="small">{classInfo.faculty}</div>
                          <div className="small text-muted">{classInfo.room}</div>
                        </>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
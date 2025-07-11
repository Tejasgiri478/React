import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const App = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", rollNo: "", class: "", address: "" });
  const [attendanceRecord, setAttendanceRecord] = useState({ studentId: "", date: "", status: "Present" });
  const [selectedStudent, setSelectedStudent] = useState("");

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAttendance(JSON.parse(localStorage.getItem("attendance")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const addStudent = () => {
    const updatedStudents = [...students, { ...newStudent, id: Date.now().toString() }];
    setStudents(updatedStudents);
    setNewStudent({ name: "", rollNo: "", class: "", address: "" });
  };

  const markAttendance = () => {
    if (!attendanceRecord.studentId || !attendanceRecord.date) return;
    setAttendance((prev) => [...prev, { ...attendanceRecord, id: Date.now().toString() }]);
    setAttendanceRecord({ studentId: "", date: "", status: "Present" });
  };

  const deleteAttendance = (id) => {
    setAttendance((prev) => prev.filter((record) => record.id !== id));
  };

  const filteredAttendance = selectedStudent
    ? attendance.filter((record) => record.studentId === selectedStudent)
    : attendance;

  const attendanceStats = filteredAttendance.reduce(
    (acc, record) => {
      acc[record.status.toLowerCase()] += 1;
      return acc;
    },
    { present: 0, absent: 0 }
  );

  const total = attendanceStats.present + attendanceStats.absent;
  const presentPercentage = total ? ((attendanceStats.present / total) * 100).toFixed(2) : 0;
  const absentPercentage = total ? ((attendanceStats.absent / total) * 100).toFixed(2) : 0;

  const chartData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [presentPercentage, absentPercentage],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const selectedStudentDetails = students.find(s => s.id === selectedStudent);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Attendance App</h1>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Add Student</h2>
        <input className="border p-2 mr-2" type="text" placeholder="Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
        <input className="border p-2 mr-2" type="text" placeholder="Roll No" value={newStudent.rollNo} onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })} />
        <input className="border p-2 mr-2" type="text" placeholder="Class" value={newStudent.class} onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })} />
        <input className="border p-2 mr-2" type="text" placeholder="Address" value={newStudent.address} onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addStudent}>Add Student</button>
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Mark Attendance</h2>
        <select className="border p-2 mr-2" value={attendanceRecord.studentId} onChange={(e) => setAttendanceRecord({ ...attendanceRecord, studentId: e.target.value })}>
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
        <input className="border p-2 mr-2" type="date" value={attendanceRecord.date} onChange={(e) => setAttendanceRecord({ ...attendanceRecord, date: e.target.value })} />
        <select className="border p-2 mr-2" value={attendanceRecord.status} onChange={(e) => setAttendanceRecord({ ...attendanceRecord, status: e.target.value })}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={markAttendance}>Mark Attendance</button>
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Attendance Statistics</h2>
        <div className="w-40 h-40 mx-auto mt-4">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default App;

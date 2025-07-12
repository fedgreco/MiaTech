let students = [
  { name: "Mario", grade: 75 },
  { name: "Djana", grade: 45 },
  { name: "Carlo", grade: 58 },
  { name: "Dario", grade: 90 },
  { name: "Stefano", grade: 69 }
];

let passedStudents = students.filter(student => student.grade >= 60);

let firstFailedStudent = students.find(student => student.grade < 60);

console.log("Studenti promossi:", passedStudents);
console.log("Primo studente bocciato:", firstFailedStudent);

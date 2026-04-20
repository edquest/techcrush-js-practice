function summarizeStudent(students) {
    return students.map(student => {
        return `${student.name} scored ${student.score} — Grade: ${gradeScore(student.score)}`;
    });
}

const students = [
    { name: "Femi", score: 88 },
    { name: "Azeez", score: 65 },
    { name: "Chris", score: 45 }
];

console.log(summarizeStudent(students));
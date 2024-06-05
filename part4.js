"use strict";
;
// Step 2
const students = [
    {
        name: "Hamzah",
        isSenior: true,
        hasCompletedAssignment: true,
    },
    {
        name: "Bilal",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Aleem",
        isSenior: true,
        hasCompletedAssignment: false,
    },
    {
        name: "Mujtaba",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Wahaj",
        isSenior: true,
        hasCompletedAssignment: false,
    }
];
console.log(students);
// Step 3
const findSenior = (students) => {
    return students.filter(student => student.isSenior && student.hasCompletedAssignment === true);
};
console.log(findSenior(students));
// Step 4
const removeStudent = (students) => {
    return students.filter(student => student.hasCompletedAssignment === false);
};
console.log(removeStudent(students));

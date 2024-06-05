// Assignment 4: Student List Organizer
// Step 1
 interface Student {
    name: string;
    isSenior : boolean;
    hasCompletedAssignment: boolean;
};
// Step 2
const students : Student[] = [
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
    
]
console.log(students);

// Step 3
const findSenior = (students: Student[]) => {
    return students.filter(student => student.isSenior && student.hasCompletedAssignment=== true)
}
console.log(findSenior(students));

// Step 4
const removeStudent= (students: Student[]) => {
    return students.filter(student => student.hasCompletedAssignment === false)
}
console.log(removeStudent(students));
const students = [
    {
        name: 'Dayane',
        grade: 7
    },
    {
        name: 'Joana',
        grade: 4
    },
    {
        name: 'Enzo',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);
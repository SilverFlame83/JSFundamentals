function studentsGrade(grade) {
    let result = "";
    if (grade < 3) {
        result = `Fail (2)`;
    } else if (grade < 3.5) {
        result = `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.5) {
        result = `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.5) {
        result = `Very good (${grade.toFixed(2)})`;
    } else {
        result = `Excellent (${grade.toFixed(2)})`;
    }
    console.log(result);  
}
studentsGrade(3.33);
studentsGrade(4.50);
studentsGrade(2.99);

// program to print grade according to student's marks

let marks = 90
 
function gradeStudent(marks) {
   if (marks > 90) {
       return 'A';
   } else if (marks >= 70 && marks <= 90) {
       return 'B';
   } else if (marks >= 50 && marks < 70) {
       return 'C';
   } else {
       return 'F';
   }
}  

    if (!isNaN(marks)) {
        const grade = gradeStudent(marks);
            console.log(`The student has received a grade of ${grade}.`);
    } else {
            console.log('Invalid input, please enter a valid number for marks.');
    }
function calculateGrade() {
  let subject1 = parseInt(prompt("Enter Marks for subject 1"));
  let subject2 = parseInt(prompt("Enter Marks for subject 2"));
  let subject3 = parseInt(prompt("Enter Marks for subject 3"));
  let subject4 = parseInt(prompt("Enter Marks for subject 4"));
  let subject5 = parseInt(prompt("Enter Marks for subject 5"));

  let sum = subject1 + subject2 + subject3 + subject4 + subject5;
  let average = sum / 5;
  let grade;

  console.log(`Subject 1 = ${subject1}`);
  console.log(`Subject 2 = ${subject2}`);
  console.log(`Subject 3 = ${subject3}`);
  console.log(`Subject 4 = ${subject4}`);
  console.log(`Subject 5 = ${subject5}`);

  if (average > 90) {
    grade = "A+";

  } else if (average >= 80) {
    grade = "A";

  } else if (average >= 70) {
    grade = "B";

  } else if (average >= 60) {
    grade = "C";

  } else if (average >= 50) {
    grade = "D";
    
  } else {
    grade = "F";
  }

  alert(`Total mark is: ${sum} \n Average: ${average} \n Grade: ${grade}`);
}

const studentName = document.getElementById("studentName");
const goal = document.getElementById("goal");

const grade1 = document.getElementById("grade1");
const grade2 = document.getElementById("grade2");
const grade3 = document.getElementById("grade3");
const grade4 = document.getElementById("grade4");
const grade5 = document.getElementById("grade5");

const output = document.getElementById("output");

function calculate() {
  if (goal.value === "") {
    goal.style.border = "solid red";
  }
  if (studentName.value === "") {
    studentName.style.border = "solid red";

    setTimeout(() => {
      studentName.style.border = "";
      goal.style.border = "";
    }, 1000);
  } else if (studentName.value && goal.value) {
    const grades = [
      Number(grade1.value),
      Number(grade2.value),
      Number(grade3.value),
      Number(grade4.value),
      Number(grade5.value),
    ];
    const total = grades.reduce((sum, g) => sum + g, 0);
    const finalGrade = total / 5;

    if (finalGrade >= goal.value) {
      output.style.color = "green";
      output.innerHTML = `${finalGrade}% ` + `${studentName.value} Passed`;
    } else {
      output.style.color = "red";
      output.innerHTML = `${finalGrade}% ` + ` ${studentName.value} failed`;
    }
  }
}

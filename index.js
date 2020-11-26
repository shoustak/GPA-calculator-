var course = document.querySelector("#course");
var grade = document.querySelector("#grade");
var points = document.querySelector("#points");
var btn = document.querySelector("#add");
const tbody = document.querySelector("#tbody");
const table = document.querySelector("#table");

var courses = [{}];

btn.addEventListener("click", ()=>{

if(grade.value === '' ){
    grade.classList.add("error");
    points.classList.remove("error");
}else if(points.value === ''){
    points.classList.add("error");
    grade.classList.remove("error");
}else{  
grade.classList.remove("error");
points.classList.remove("error");

const tr = document.createElement('tr');
const tdCourse = document.createElement('td');
tdCourse.innerHTML = course.value;
const tdGrade = document.createElement('td');
tdGrade.innerHTML = grade.value;
const tdPoints = document.createElement('td');
tdPoints.innerHTML = points.value;


tr.appendChild(tdPoints);
tr.appendChild(tdGrade);
tr.appendChild(tdCourse);
tbody.appendChild(tr);
table.classList.remove('display-none');

var courseToAdd = {
    course: course.value,
    points: points.value,
    grade:  grade.value
};

courses.push(courseToAdd);

course.value = '';
grade.value = '';
points.value = '';

calculateGpa();

}
})


function calculateGpa(){
   
    for (var i = 1,currentGrades = 0,currentPoints=0; i < courses.length; i++) {
        currentGrades += parseInt(courses[i].grade)*parseInt(courses[i].points);
        currentPoints += parseInt(courses[i].points);
      }
  
    var currentGPA = currentGrades / currentPoints;

    document.querySelector(".card-title").innerHTML = currentGPA.toFixed(2);

}
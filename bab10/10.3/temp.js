document.addEventListener("DOMContentLoaded", showAllStudents);

let data = [
  { id: 1, firstName: "Harry", lastName: "Potter", age: 46 },
  { id: 2, firstName: "Johnny", lastName: "Depp", age: 25 },
];

let index = data.length;
function showAllStudents() {
    let table = document.getElementById("students-table");
    table.innerHTML = "";
    let students = "";
    data.forEach((student) => {
      let tr = document.createElement("tr");
  
      Object.keys(student).forEach((key) => {
        let td = document.createElement("td");
        td.innerText = student[key];
        tr.appendChild(td);
      });
      let td = document.createElement("td");
      let buttonContainer = document.createElement("td");
      buttonContainer.className = "button-container";
  
      let showButton = document.createElement("button");
      showButton.innerText = "Show";
      showButton.className = "show";
      showButton.setAttribute("onclick", `showStudent(${student.id})`);
  
      let editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.className = "edit";
      editButton.setAttribute("onclick", `editStudent(${student.id})`);
  
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete";
      deleteButton.setAttribute("onclick", `deleteStudent(${student.id})`);
  
      buttonContainer.appendChild(showButton);
      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(deleteButton);
  
      tr.append(buttonContainer);
      tr.setAttribute("id", student.id);
      table.appendChild(tr);
    });
  }
  
  function addStudent(e) {
    e.preventDefault();
  
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");
    
  data.push({
    id: ++index,
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
  });

  showAllStudents();

  firstName.value = "";
  lastName.value = "";
  age.value = "";
}

function deleteStudent(id) {
  data = data.filter((student) => student.id !== id);
  showAllStudents();
}

function showStudent(id) {
  let { firstName, lastName, age } = data.find((student) => student.id === id);
  let detail = `Nama : ${firstName} ${lastName}, Umur : ${age}`;
  alert(detail);
}

function editStudent(id) {
  let foundStudent = data.find((student) => student.id === id);
  let newFirstName = prompt("Masukkan nama depan : ");
  let newLastName = prompt("Masukkan nama belakang : ");
  let newAge = prompt("Masukkan umur : ");

  foundStudent.firstName = newFirstName;
  foundStudent.lastName = newLastName;
  foundStudent.age = newAge;

  alert("Data berhasil diubah");

  showAllStudents();
}

  
const math = window.math;

function invers(matrix) {
  let res = math.inv(matrix);
  return res;
}

function transpose(matrix) {
  let res = math.transpose(matrix);
  return res;
}

function add(matrix1, matrix2) {
  let res = math.add(matrix1, matrix2);
  return res;
}

function multiply(matrix1, matrix2) {
  let res = math.multiply(matrix1, matrix2);
  return res;
}

function display(topic, answer) {
    let li = document.createElement("li");
    let h3 = document.createElement("h3");
    let matrix = document.createElement("div");
    matrix.setAttribute("class", "matrix");
    h3.innerText = topic;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let matrixElement = document.createElement("div");
        matrixElement.innerText = +(Math.round(answer[i][j] + "e+2") + "e-2");
        matrix.appendChild(matrixElement);
      }
    }
    li.appendChild(h3);
    li.appendChild(matrix);
    $("#answer").prepend(li);
  }
  
  function getMatrix(matrixIndex) {
    let elements = $(`#matrix${matrixIndex}`).children();  let numbers = [[], [], []];
    let idx = 0;
    Array.from(elements).forEach((element, index) => {
      if (index !== 0 && index % 3 === 0) {
        console.log(element.value);
        console.log("object");
        idx++;
      }
      numbers[idx].push(element.value);
    });
    return numbers;
  }
  
  $("#invers1").click(() => {
    let numbers = getMatrix(1);
    let result = invers(numbers);
    display("Invers Matriks 1", result);
  });
  
  $("#invers2").click(() => {
    let numbers = getMatrix(2);
    let result = invers(numbers);
    display("Invers Matriks 2", result);
  });
  
  $("#transpose1").click(() => {
    let numbers = getMatrix(1);
    let result = transpose(numbers);
    display("Transpose Matriks 1", result);
  });
  
  $("#transpose2").click(() => {
    let numbers = getMatrix(2);
    let result = transpose(numbers);
    display("Transpose Matriks 2", result);
  });
  
  $("#add").click(() => {
    let matrix1 = getMatrix(1);
    let matrix2 = getMatrix(2);
    let result = add(matrix1, matrix2);
    display("Matriks 1 + Matriks 2", result);
  });
  
  $("#multiply").click(() => {
    let matrix1 = getMatrix(1);
    let matrix2 = getMatrix(2);
    let result = multiply(matrix1, matrix2);
    display("Matriks 1 x Matriks 2", result);
  });
  
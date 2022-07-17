const output = document.getElementById("output-value");

//catch number
const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    output.innerText += number[i].innerText;
  })
}

//catch operator
const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  const element = operator[i];
  element.addEventListener('click', function () {
    output.innerText += operator[i].innerText;
  })
}

//catch id
const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
  output.innerText = "";
  history.innerText = "";
})

const backspace = document.getElementById("backspace");
backspace.addEventListener('click', function () {
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
})

//result
const equal = document.getElementById("equal");
equal.addEventListener("click", function () {
  output.innerText = eval(output.innerText)
});
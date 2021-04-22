function compute() {
  var input1 = document.getElementById('num1');
  var input2 = document.getElementById('num2');
  var answer = document.getElementById('ans');
  var result = parseFloat(input1.value) * parseFloat(input2.value)
  answer.innerHTML = result
}

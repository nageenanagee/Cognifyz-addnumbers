
alert('Enter a Valid Number')

function sum() {
  var first_no, second_no, sum;
  first_no = parseInt(document.getElementById("firstnumber").value);
  second_no = parseInt(document.getElementById("secondnumber").value);
  sum = first_no + second_no;
  document.getElementById("result").value = sum;
}



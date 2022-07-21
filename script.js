let inputs = ""

function insert(input) {
  if(input == "on/c" || input == "ce"){
    inputs = ""
    document.getElementById("result").innerHTML = inputs
    return
  }

  if(input != "=") {
    if(inputs == "0") {
      document.getElementById("result").innerHTML = ""
    }

    inputs += input
    document.getElementById("result").innerHTML += input
  } else {
    calculate(inputs)
  }
}

function calculate(inputs) {
  document.getElementById("result").innerHTML = eval(inputs)
}






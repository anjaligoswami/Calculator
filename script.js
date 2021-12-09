let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons");
let expression = "";

function onClick(event) {
  let key = event.target.textContent;
 if(expression === "Infinity")
   expression =""

if(expression === "undefined")
   expression = ""

  console.log(key);
  switch (key) {
    
    case "DEL":
      expression = expression.substring(0, expression.length - 1);
      break;
    case "AC":
      expression = ""
      break;
    case "=":
      expression = ""+ eval(expression)
      break;
    case "ร—":
      expression += "*"
      break;
     case "รท":
      expression += "/"
      break
    default:
      expression+= key
  }

  display.textContent = expression
}

function addClick(element) {
  element.addEventListener("click", onClick);
}
buttons.forEach(addClick);
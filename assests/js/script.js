const btns = document.querySelectorAll('.btn')
// const btns = document.getElementsByClassName("btn");
const display = document.querySelector('#display')

for (btn of btns) {
  btn.addEventListener("click", function () {
    if(this.value == 'eq'){
      return evaluate()
    }
    if(this.value == 'clear'){
      return display.value = '';
    }
    if(this.value == '^'){
      return display.value += '**';
    }
    if(this.value == '%'){
      return display.value += '/100';
    }
    if(this.value == 'sqrt'){
      return display.value = Math.sqrt(parseFloat(display.value));
    }
    // console.log(this.value)
    display.value += this.value;
  });
}

// function evaluate(){
//   if(display.value != ''){
//     let result = eval(display.value)
//     return display.value = result;
//   }
//   return false;
// }

//arrow function
const evaluate = () =>{
  if(display.value != ''){
    let result = eval(display.value)
    return display.value = result;
    }
    return false;
}

display.addEventListener('keypress', (e) =>{
  if(e.key === 'Enter'){
    return evaluate();
  }
});
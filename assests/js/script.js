const btns = document.querySelectorAll('.btn')
// const btns = document.getElementsByClassName("btn");
const display = document.querySelector('#display')

for (btn of btns) {
  btn.addEventListener("click", function () {
    if(this.value == 'eq'){
      let result = eval(display.value)
      return display.value = result;
    }
    if(this.value == 'clear'){
      return display.value = '';
    }
    // console.log("ff");
    // console.log(this.value)
    display.value += this.value;
  });
}

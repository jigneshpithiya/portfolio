
span = document.getElementById('menubars');
span1 = document.getElementById('menubars1');
menu = document.getElementById('fistulmenu');



function test() {
    span.style.visibility = "hidden";
    span1.style.visibility = "visible";
    menu.style.display = "block";
}
 
function test1() {
    span1.style.visibility = "hidden";
    span.style.visibility = "visible";
    menu.style.display = "none";
}

dropclick = document.getElementById('dropclick');
clickul =  document.getElementById('clickul');

dropclick1 = document.getElementById('dropclick1');
clickul1 =  document.getElementById('clickul1');

dropclick2 = document.getElementById('dropclick2');
clickul2 =  document.getElementById('clickul2');

dropclick3 = document.getElementById('dropclick3');
clickul3 =  document.getElementById('clickul3');


 function fn()
 {
    if (clickul.style.display == "none") {
        // clickul.classList.remove('show')
        clickul1.style.display="none"
        clickul.style.display="block"
      } 
       else {
        clickul.style.display="none"
    }
    
}
function fn1(){
    if (clickul1.style.display == "none") {
        // clickul.classList.remove('show')
        clickul.style.display="none"
        clickul1.style.display="block"
      } 
       else {
        clickul1.style.display="none"
      }

 }
 function fn2(){
    if (clickul2.style.display == "none") {
        // clickul.classList.remove('show')
        clickul.style.display="none"
        clickul2.style.display="block"
      } 
       else {
        clickul2.style.display="none"
      }

 }
 function fn3(){
    if (clickul3.style.display == "none") {
        // clickul.classList.remove('show')
        clickul.style.display="none"
        clickul3.style.display="block"
      } 
       else {
        clickul3.style.display="none"
      }

 }


    


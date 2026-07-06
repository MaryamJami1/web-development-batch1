// const click = document.getElementById("btn");
// click.addEventListener("click" , function(event){
//    console.log(event.type);
   
// });


// // click.addEventListener("click" , function(event){
// //     alert("Hello User!")
// // });



// // click.addEventListener("keyup" , function(event){
// //     console.log(event.key);
// // });

// // click.addEventListener("mousemove" , function(event){
// //     console.log("X:", event.clientX, "Y:", event.clientY);
// // });


// const div = document.getElementById("box");
// div.addEventListener("mouseover",function(){
//     box.style.background = "green"
//     box.innerHTML = "You are in"
// });
// div.addEventListener("mouseout",function(){
//     box.style.background = "red"
//       box.innerHTML = "You are out"
// })




// const form = document.getElementById("myForm");
// form.addEventListener("submit", function(event) {
//     event.preventDefault()
//    console.log("Form submit ho gaya");
// });

// form.addEventListener("keydown", function(event) {
//   console.log(event.key);
// });



// main array HTMLCollection hoga index 0 div p p p div   1 index div length

// const htmlCollect = document.getElementsByClassName("parent");
// const div = htmlCollect[0];

// div.children[2].addEventListener("click" , ()=>{
//   div.children[0].innerHTML = "HELLOWWWWWWWWWWWWWWWWWW"
// })










// prnt[0].addEventListener("mouseover" , ()=>{
//   prnt[0].children[1].textContent = "Hey!"
// })




setTimeout(()=>{
  Swal.fire({
  position: "center",
  icon: "success",
  title: "Welcome Our Website",
  showConfirmButton: true,
  timer: 5000
});
} , 4000)








// let interval = setInterval(( )=>{
//   Swal.fire({
//   position: "center",
//   icon: "success",
//   title: "Welcome Our Website",
//   showConfirmButton: true,
//   timer: 2000
// });  

// clearInterval(interval)
// } , 3000)




let count = 0;

let interval = setInterval(() => {
  count++;

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Welcome Our Website",
    showConfirmButton: true,
    timer: 2000
  });

  if (count == 5) {
    clearInterval(interval);
  }
}, 3000);




// buildin
// setTimeout(()=>{
//   alert("hello")
// } , 5000)  



// addEventListener("click" , ()=>{
//   alert()
// })



function step1(step2) {
  console.log("Step 1 Complete");
  step2(step3)
}
function step2(step3){
  console.log("step 2 complete");
  step3(step4)
}
function step3(step4){
  console.log("step 3 complete");
  step4(step5)
}
function step4(step5){
  console.log("step 4 complete");
  step5()
}

function step5(){
  console.log("step 5 completed");
  
}


step1(step2)

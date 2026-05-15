// conditions
// if or else
  // boolean



      //true



// let userAge = prompt("enter you age");
// console.log(userAge);


// if(userAge < 18){
//     alert("You can Vote!")
// }else{
//     alert("You can't vote")
// }






// if("no"=="yes"){
// console.log("its raining");
// }else{
//   console.log("its sunny");
// }




// comparison operators
// ==   ===




//just check values
if(60 == "60"){
    console.log("pass");
    
}else{
    console.log("fail");
    
}

//checks values with type
if(60 === "60"){
    console.log("pass");
    
}else{
    console.log("fail");
    
}


// !=  not equal to
if("60" !== "80"){
    console.log("not equal");
    
}
else{
    console.log("equal");
}



// condition

if("biryani" == "haleem"){
    console.log("Biryani mil gai");
    

}else if("Haleem" == "Haleem"){
    console.log("biryani nh mili haleem mil gai");
    

}else if("Nihari" == "Nihari"){
    console.log(" nihari mil gai");
    
    
}else{
    console.log("kch nh mila");
    
}

console.log("conditions khtm");


// logical operator

// and operator &&

           //true                 true
if("idCard" === "idCard" && "copy" === "copy"){
console.log("you can enter in the class");
}else{
console.log("you can not enter in the class");
}





// or operator ||


       //!true false                      false
if(!"idCard" === "idCard" || "copy" === "paper"){
console.log("you can enter in the class");
}else{
console.log("you can not enter in the class");
}



// not operator !
if(true == !true){
 console.log("true");
}else{
    console.log("false");
}









// condition practice

let mode = "dark mode";
let color = null;    
console.log(color);

if(mode === "dark mode"){
    color = "black";
    console.log(color);
}else{
    console.log("false");
}





// array

let student1 = "ali";
let student2 = "mazhar";
let student3 = "bilal";
let student4 = "haider";
let student5 = "nimrah";



// array syntax
let studentList = ["ali" , "mazhar" , "bilal" , "haider" , "nimrah" ];
                     0   ,    1     ,   2     ,    3     ,    4
// you can get array elements through indexing

console.log(typeof(studentList));     //object
console.log( Array.isArray(studentList));   //true




// array syntax
let studentList1 = ["ali" , "mazhar" , "bilal" , "haider" , "nimrah" ];
                     0   ,    1     ,   2     ,    3     ,    4
// you can get array elements through indexing
console.log(studentList1);
console.log(studentList1[2]);




// array updation
studentList1[3] = "muhammad";
console.log(studentList1);
console.log(studentList1.length);



// mix data type array
let studentList2 = ["ali" , 123, true , null, ,];
                //   0    ,  1 , 2   , 3  ,  4

studentList2[5] = "hello"
console.log(studentList2);
console.log(studentList1.length);
console.log(studentList2[5]); //undefined



// for empty array
console.log(studentList2.length = 0);
console.log(studentList2);









// non primitive
// store as refrence 
let arr = [1 , 2 , 3 ,4 ,5];
let newArr = arr;
newArr[1] = "two";

console.log(newArr);
console.log(arr);


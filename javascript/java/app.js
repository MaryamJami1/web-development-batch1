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

/*


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
console.log(studentList2[5]); 



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




// array methods
// push   add new in elemet on last index 

let studentList3 = ["ali" , 123, true , null];
console.log(studentList3);


// studentList3[4] = "hello";
studentList3.push("hello");
console.log(studentList3);



// pop  delete last index element of the array

let studentList4 = ["ali" , 123, true , 1234];
studentList4.pop();
console.log(studentList4); 



// shift  delete fisrt element of the array index 0
let studentList5 = ["ali" , 123, true , null];
studentList5.shift();
console.log(studentList5); 


// unshift  add new element on the array first index
let studentList6 = ["ali" , 123, true , null];
studentList6.unshift("new add");
console.log(studentList6); 



// indexof get index by element

let fruits = ["banana" , "oranage", "grapes" , "guava" , "strawberry" , 123 , "mango" , "apple"];
console.log(fruits);

console.log(fruits.indexOf(123));


// includes check items exist or not

let fruits1 = ["banana" , "oranage", "grapes" , "guava" , "strawberry" , 123 , "mango" , "apple"];
console.log(fruits1.includes(123));



// reverse  array change into opposite side

// let numbers = [1 , 2 ,3 , 4 ,5];
// let fruits2 = ["banana" , "orange", "grapes" , "guava" , "strawberry" , 123 , "mango" , "apple"];
// fruits2.reverse();
// console.log(fruits2);

// numbers.reverse();
// console.log(numbers);


// join   array change into string
let num = [1 , 2 ,"ali" , 4 ,5, true ,7, 8];
console.log(num);


console.log(num.join(" "));


// slice 

let names = ["hamza" , "ali" , "bilal" , "fatima", "nimra" , "mehek" , "noor" , "sara" ];

// delete
let namesSlice = names.slice(3 , 6);
console.log(names);

console.log(namesSlice);



// splice  changes into orignal array it can delete update and add

let studentNames = ["hamza" , "ali" , "bilal" , "fatima", "nimra" , "mehek" , "noor" , "sara" ];

// add
studentNames.splice(2 , 0 , "saad" )
console.log(studentNames);





// splice  changes into orignal array it can delete update and add
let student = ["hamza" , "ali" , "bilal" , "fatima", "nimra" , "mehek" , "noor" , "sara" ];
// replace
console.log(student.indexOf("mehek"));
student.splice(5 , 1 , "Sumair");
console.log(student);
*/





// Loop
// print hello 10 times

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");



// for(initialization ; condition ; updation){

// }


// for(let i = 0;  i < 10 ; i++){
// console.log(i);   
// };


// first turn
// i  = 0 ;  initialize
// 0 < 10 ; condition check      true false
// block of code{
//     // hello
// }


// second turn
// updation ++ post increament
// i = 0 + 1   = 1
// condition check 
// 1 < 10 ; true
// block of code{

// }













// let i = 1;  i < 10 ;
// initialization ; condition
// fisrt turn i = 0   1 < 10{
//  console.log("hello");
//  }


// condition ; updation
// second turn so on





















// if(!"idCard" === "idCard" || "copy" === "paper"){
// console.log("you can enter in the class");
// }else{
// console.log("you can not enter in the class");
// }












// print table of 2
// console.log("2 x 1 = 2");
// console.log("2 x 2 = 4");
// console.log("2 x 3 = 6");


// loop

// let tableNum = prompt("enter your number for printing table");

// for(let i = 1; i <= 10; i++){
// document.write(`${tableNum} x ${i} =  ${tableNum * i} <br>`);
// }; 




//  1 to 20 
// even condition

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`this is even number ${i}`);
    } else {
        console.log(`this is odd number ${i}`);
    }
};



let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "a", "b", "c", "d", "e", "f", "g", "h"];
// arr[0]
// arr[1]
// arr[2]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}




// array iteration
// let cars = ["fortuner", "BMW", "Audi", "Civic", 1, 2, 3, 4, 5, "hello", "hi"];

// for (let i = cars.length - 1; i >= 0; i--) {
//     document.write(`<br>${cars[i]} <br>`);
// };



// nested array

// let products = ["mobile" , "shirts" , "lipstick" , "shoes"]

let products =
    [
        ["mobile", "laptop"],
        ["shirt", "jeans"],
        ["lipstick", "blush on"],
        ["shoes", "Heels"]
    ]

    // main array 4 elemenst

    console.log(products);
    

//    calling main array element
    console.log(products[2]);
     // calling nested array by index
    console.log(products[2][1]);
    
    
  
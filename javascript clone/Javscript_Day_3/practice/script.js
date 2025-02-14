// challenge -1(template literals)

// const student ={
//     name:"Vignesh",
//     age:21,
//     projects:{
//         dicegame:"two player dice game using javascript"
//     }
// }

// const {name,age,projects:{dicegame}}=student;

// console.log(`${name} is a student who done a ${dicegame} project at the age of ${age}`);

// document.getElementById("students").innerText=`${name}   ${age} ${dicegame}`;





// challenge -2(object literals)

// function addressmaker(address){
//   const {city,state}=address;
//   const newAddress ={
//     city,
//     state,
//     country:"India"
//   }
//   console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
// }
// addressmaker({city:"chennai",state:"tamilnadu"})




// challenge -3(for of loop)

// let fullname="vignesh senthil";

// for(const letters of fullname){
//     console.log(letters);
// }




//challenge -4 (for of loop)

// let student=[
//     {name:"vignesh",city:"tamilnadu"},
//     {name:"vishwesh",city:"andhra"},
//     {name:"arun",city:"texas"},
//     {name:"regin",city:"kerala"}
// ];

// for(datum of student){
//     console.log(`${datum.name} lives in ${datum.city}`);
// }




//challenge -5 (spread operator)

// const shoppinglist=['milk','curd','butter'];

// console.log("shoppinglist :",shoppinglist);

// const shoppingbasket=[...shoppinglist,'oil','onion'];

// console.log("shoppingbasket :",shoppingbasket);



//challenge -6 (Default params)

// const lunch = (drink="tea") =>{
//     console.log(`I'm going to drink ${drink} today`);
// }
// lunch();



//challenge -7 (includes())

// let numArray =[1,2,3,4,"A",'B','C'];

// console.log(numArray.indexOf("B"));

// console.log(numArray.includes(2));

//challenge - 8 (import & export)


// export const add=(num1,num2)=>{
//      return num1+num2;
// }

//challenge - 9 (padEnd,padStart)

// let fname="vignesh";
// console.log(fname.padStart(10,'a'));
// console.log(fname.padStart(10,'a'));

//challenge - 10 (classes in javascript)


// class Product{
//     constructor(pname,price){
//         this.pname=pname;
//         this.price=price;
//     }
//     displayProduct(){
//         console.log(`the  price of the ${this.pname} is ${this.price}`);

//     }
    
// }
// const product1 = new Product("Shirt","200Rs");

// console.log(product1.displayProduct());

// class 

// class Product{
//     constructor(name,age){
//       this.name=name;
//       this.age=age;
//     }

//     displayresult(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);
//     }
// }
//    let finalcall = new Product("Vignesh",21);

//    finalcall.displayresult();





//challenge - 11

// class Player{
//     constructor(Name,Country){
//       this.Name=Name;
//       this.Country=Country;
//     }
//     work(){
//         console.log(`${this.Name} plays for ${this.Country}`)
//     }
// }
// let parentclass = new Player("Vignesh","India");

// parentclass.work();


// class Badmintonplayer extends Player{
//     constructor(Name,Age,Country){
//         super(Name,Country);
//       this.Age=Age;
//     }

//     workofBadmintonplayer(){
//         console.log(`${this.Name} is ${this.Age} years old and he plays badminton by representing ${this.Country}`);
//     }
// }

// let childclass = new Badmintonplayer("Vignesh",21,"India");

// childclass.workofBadmintonplayer();




//challenge - 12 (promise)

// const buyflightticket =()=>{
//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                const error = false;

//                if(error){
//                 console.log("the transaction is failed");
//                }else{
//                 console.log("the transaction is Successful");
//                }
//           },3000)
//     })
// }


// challenge -13(promise challenge - 2)
// buyflightticket().
// then((success)=>{console.log(success)}).
// catch((error)=>{console.log(error)});



// const userData = ()=>{
//     // return new Promise((resolve,reject))=> {
//     //      setTimeout()
//     // }

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fname="vignesh";
//             const email = "vigneshsenthilkumar@remitbee.com";
//             if(fname!=="vignesh" || email !=="vigneshsenthilkumar@remitbee.com" ){
//                 reject("the information is not valid");
//             }else{
//                 resolve("the information is valid")
//             }
//         }, 3000)
//     })
// }
// userData().
// then((success)=>{console.log(success)}).
// catch((error)=>{console.log(error)});


//challenge - 14 (fetch)

// fetch("https://meowfacts.herokuapp.com/")
// .then((res) => res.json())
// .then((message) => {console.log(message)})
// .catch((err) => {console.log(err)})

// async function getData() {
//     const res = await fetch("https://meowfacts.herokuapp.com/")
//     const message = await res.json()
//     console.log(message)
// }

// getData()

// const photo = [];
 
// async function photoUpload(){
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//           photo.push("profile pic");
//           photo.push("vignesh photo");
//           resolve("photo uploaded")
//         },3000)
//     })
//     let result = await uploadStatus;
//     console.log(result);
//     console.log(photo.length);
// }

// photoUpload();

// fetch('https://catfact.ninja/fact')
// .then(response => response.json())
// .then(data => console.log(data))

// async function vignesh(age) {
//     await console.log(age);
// }

// vignesh(21);



//Switch case

// let a=4;
// switch(a){
//     case 1:
//         console.log("this is one");
//        continue;
//     case 2:
//          console.log("this is two");
//         break;
//     case 3:
//         console.log("this is three");
//         break;
//     case 4:
//         console.log("this is four");
//         break;
//     default:
//         console.log("this is default");
// }







// for loop

// for(let i=0;i<5;i++){
//     console.log("John");
// }




//for of loop

// const names =['vignesh','arun','rajin'];
// for(fname of names){
//     console.log(fname);
// }



//for in loop

// const user={
//     name:"vignesh",
//     age:21,
//     city:"chennai"
// }


// for(props in user){
//     console.log(props+" : "+user[props]);
// }




//forEach with number

// const numbers=[1,2,3,4,5,6,7,8,9,10];

// numbers.forEach((values)=>{
//     console.log(values);
// })





//forEach with String

// const Fruits=['apple','banana','orange'];
//    Fruits.forEach((fruit,index)=>{
//     console.table(index+" "+fruit);
// })





//forEach with Object

// const users=[
//     {Full_name:"Vignesh",Age:21,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Vishwesh",Age:23,City:"Kadappa",State:"Andhra pradesh"},
//     {Full_name:"Arun",Age:25,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Rajin",Age:21,City:"Kanoor",State:"Kerala"},
//     {Full_name:"Deep",Age:23,City:"Kolkata",State:"West Bengal"}
// ];

// users.forEach((values,index)=>{
//     console.log("Name: "+values.Full_name+"  "+"Age: "+values.Age);
// })




//forEach to apply values in new array from exisiting array

// const numb=[2,3,4,5,6];
// const copy=[];
// numb.forEach((values)=>{
//     copy.push(values*2);
// })
// console.table(numb);
// console.table(copy);




//forEach sum all elements in an array

// const numb=[2,3,4,5,6];
// total=0;
// numb.forEach(numbers=>{
//     total+=numbers;
// })
// console.log(total);



// forEach to find max number in an array

// const numb=[2,3,4,7,9];
// let maxnum=numb[0];

// numb.forEach(maximum=>{
//     if(maximum>maxnum){
//         maxnum=maximum;
//     }
// })
// console.log(maxnum);







// while loop

// i=0;
// while(i<5){
//     console.log("vanakam da maapla");
//     i++;
// }


// Do-while loop

// let i=1;

// do{
//     console.log("Arun is java programmer");
//     i++;
// }while(i<=3)



//if condition


// if(arun==vignesh){
    //  console.log("Vignesh is fullstack developer");
    // }else{
    //     console.log("Arun is teester");
    // }



//if else-if condition

// let arun = 100;
// let vignesh= 40;

// if(arun==vignesh){
//     console.log("Vignesh is fullstack developer");
// }else if(vignesh>=39){
//     console.log("Arun is teester");
// }else{
//     console.log("both are wrong");
// }



//Map function to find sqrt and store it in another array

// const normal_arr=[3,4,25,36,49];

// let sqrt=normal_arr.map((numberss)=>{
//    return Math.sqrt(numberss);
// })

// console.log(sqrt);






//Map function with object to find eligibility to vote


// const users=[
//     {Full_name:"Vignesh",Age:21,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Vishwesh",Age:23,City:"Kadappa",State:"Andhra pradesh"},
//     {Full_name:"Arun",Age:17,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Rajin",Age:21,City:"Kanoor",State:"Kerala"},
//     {Full_name:"Deep",Age:23,City:"Kolkata",State:"West Bengal"}
// ];

// let eligibility_status=users.map((user)=>({
//     // name:user.Full_name,
//     // age:user.Age,
//     // City:user.City,
//     // State:user.State,
//     ...user,
//     Status:user.Age>18?"Eligible to vote":"Not Eligible to vote"
// }))

// console.table(eligibility_status);







// map() to double the value in an array to a new array
// const origin=[2,3,4,5,6,7,];

// const doubleNumbers=origin.map((value)=>{
//    return  value*2;
// })

// console.log(doubleNumbers);







//map() to convert all the words in an array to uppercase


// let words=["vignesh","vishwesh","rajin","arun","deep"];

// let capital_arr =words.map(value=>value.toUpperCase());
// console.log(capital_arr);



//Combining two arrays (Numbers) using map function


// const arr1=[1,2,3,4];
// const arr2=[5,6,7,8];
// const combined_arr=arr1.map((value,index)=>{
//     return value+" ," +arr2[index];
// })
// console.log(combined_arr);





//Combining two arrays (String) using map function


//  const arr1=['Apple','Banana','Orange','Lemon'];
//  const arr2=['Red','Yellow','Orange','lightgreen'];
//  const combined_arr=arr1.map((value,index)=>{
//      return [value, arr2[index]];
//  }).flat();
//  console.log(combined_arr);



// getting info about an array using map()

// const arr=['Apple','Banana','Orange','Lemon'];

// const arrStats=arr.map((currentValue,index,array)=>{
//     return{
//         word:currentValue,
//         letters:currentValue.length,
//         position:index,
//         totalwords:array.length
//     }
// })
// console.log(arrStats);

// //fetch revision
// async function  trial() {
//     const res = await fetch("https://meowfacts.herokuapp.com/");
//     const message = await res.json();
//     console.log(message);
// }
// trial();

// function
//ordinary function
// (function () {
//     console.log("This runs immediately!");
// })();


//anonymous function

// let funct = function(){
//     //some function here
// }


//arrow  function

// const add=(a,b)=>{
//     return a+b;
// }
// add(3,4);



//Callback function


// function funcone(){
//     console.log("I'm coming from function one");
// }

// function functwo(para){
//     para();
// }

// functwo(funcone);

//SetTimeout


// setTimeout(function(){
//     console.log("Hi I'm setimeout ");
// },3000);

// setInterval(function(){
//     console.log("Hi I'm setInterval");
// },3000);






// Numbers and Strings

//Assignment operator

// let a = 10;    // Assignment (=)
// a += 5;        // Addition assignment (+=) → a = a + 5
// console.log(a); // Output: 15


// a -= 3;        // Subtraction assignment (-=) → a = a - 3
// console.log(a); // Output: 12



// a *= 2;        // Multiplication assignment (*=) → a = a * 2
// console.log(a); // Output: 24



// a /= 4;        // Division assignment (/=) → a = a / 4
// console.log(a); // Output: 6



// a %= 5;        // Modulus assignment (%=) → a = a % 5
// console.log(a); // Output: 1



// a **= 3;       // Exponentiation assignment (**=) → a = a ** 3
// console.log(a); // Output: 1



// let b = 5;
// b &= 3;        // Bitwise AND assignment (&=) → b = b & 3
// console.log(b); // Output: 1



// b |= 2;        // Bitwise OR assignment (|=) → b = b | 2
// console.log(b); // Output: 3




// b ^= 1;        // Bitwise XOR assignment (^=) → b = b ^ 1
// console.log(b); // Output: 2




// b <<= 1;       // Left shift assignment (<<=) → b = b << 1
// console.log(b); // Output: 4




// b >>= 1;       // Right shift assignment (>>=) → b = b >> 1
// console.log(b); // Output: 2




// b >>>= 1;      // Unsigned right shift assignment (>>>=) → b = b >>> 1
// console.log(b); // Output: 1



// // exponential operator

// let a=5;
// let b =10
//  b**=a;//b=b**a
//  console.log(b);


//left shift operator

// let a=5;
// let b=2;
// console.log(a<<=b); 


//Right shift operator

// let a=5;
// let b=2;
// console.log(a>>=b); 


// number object

// // Number(parseFloat)
// console.log(Number.parseFloat("abc123"));



// // Number(parseFloat)
// console.log(Number.parseFloat("abc123"));



//Number isNaN
// const name="vissu";
// console.log(Number.isNaN(Number(name)));


//Number toFixed()

// let a=5.47853;
// console.log(a.toFixed(2));








//Math Functions

//Math.pi

// console.log(Math.PI);


//Math.pow

// console.log(Math.pow(2,3));


//Math.sign

// console.log(Math.sign(23));


//Math.round

// console.log(Math.round(5.6));


//Math.abs

// console.log(Math.abs(-23.6));


//Math.floor

// console.log(Math.floor(24.9));


//Math.ceil

// console.log(Math.ceil(34.1));


//Math.random

// console.log(Math.floor(Math.random()*20)+1);


//Math.max

// console.log(Math.max(2,3,5,1));


//Math.min

// console.log(Math.min(2,3,5,1));


//Math.sqrt

// console.log(Math.sqrt(4));

//Math.exp

// console.log(Math.exp(2,3)); //Eulers number



//Math.sin

// console.log(Math.sin(1));


//Math.cos

// console.log(Math.cos(1));


//Math.tan

// console.log(Math.tan(1));


//Math.sinh

// console.log(Math.sinh(1));


//Math.cosh

// console.log(Math.cosh(1));


//Math.tanh

// console.log(Math.tanh(1));


//Math.log

// console.log(Math.log(4));

//Type coversion(Number)

//  let a =Number ("10");
//  console.log(typeof(a));



//Type coversion(String)

//  let a =String(10);
//  console.log(typeof(a));


// Javascript String methods:

//Manual Concatenation 

// let fname = "Vignesh";
// let lname = " Senthil kumar";

// console.log(fname+lname);

//Concatenation using String method-Concat()
// console.log(fname.concat(lname));




// String.length:
// let length=fname.length
// console.log(length);




//// String.toUppercase():
// let c = fname.toUpperCase();
// console.log(c);


// String.toUppercase():
// let c = fname.toLowerCase();
// console.log(c);



// String.indexOf()

// let c = fname.indexOf('n');
// console.log(c);



//String.lastindexOf()

//  let c = fname.lastIndexOf('n');
//  console.log(c);




//String.includes()

// let c = fname.includes('e');
// console.log(c);



//String.CharAt()

// let c = fname.charAt(5);
// console.log(c);




// String.substring

// let c = fname.substring(4,7);
// console.log(c);






// String slice()

// let c=fname.slice(-2);
// console.log(c);





// String split()

// let c = lname.split(" ");
// console.log(c);



//String replace()

// let c = lname.replace('kumaran','kumar');
// console.log(c);


//String trim()

// let lnames = "   vignesh_remitbee   " ;
//  let c = lnames.trim();
//  console.log(c);




//String fromCharCode

// console.log(String.fromCharCode(65,66,67,68,69));






//------------------------------------------------Array and its inbuilt Methods:--------------------------------------------------------


//Normal array:

// const a =[10,20,30,40];
// console.log(a[1]);




//Passing array as contructor value:

// let b=new Array(10,15,20,25,true,"apple",{m1:10,m2:20,m3:30});
// console.log(b);




//Map in array:(shows only true or false)

// const a =[1,2,3,4,5,6];

// let b =a.map(values=> {return values%2==0});
// console.log(b);





//ForEach in array:

// const a =[1,2,3,4,5,6];

// let b=a.forEach((values)=>{
//     console.log(values*2);
// });




//Filter in array:(filters the array and shows the values)


// const a = [2,3,4,5,6,7];
// let b =a.filter(values=> values%2==0);
// console.log(b);


//Filter in Array (object):

// const users=[
//     {
//   Name:"vignesh",
//   Age:21
// },
//   {
//   Name:"arun",
//   Age:17
// },

//   {
//   Name:"rajin",
//   Age:19
// }]

// let b=users.filter(user=>user.Age>18);
// console.log(b);

//Filtering words more than length of four using filter:

// const arr=['arun','vignesh','vishwesh','deep'];

// let len=arr.filter(value=>value.length>4);
// console.log(len);

//Filtering with multiple conditions:

// const products=[
//     {Name:"apple",Category:'fruit',Price:100},
//     {Name:"broccoli",Category:'veg',Price:250},
//     {Name:"banana",Category:'fruit',Price:200},
//     {Name:"orange",Category:'fruit',Price:250}
// ]

//     let b = products.filter(product=>product.Category==='fruit' && product.Price>100);
//     console.log(b);



//Reduce in Array:

// const a=[1,2,3,4,5,6,7,8,11,1];

// // let b=a.reduce((acc,val)=>{
// //   return acc+val;
// // })

// let b = a.reduce((acc,val)=>{
//    return Math.max(acc,val);
// })

// console.log(b);

// const groups=[
// {name:"vignesh",city:"Chennai"},
// {name:"arun",city:"Madurai"},
// {name:"rajin",city:"Madurai"},
// {name:"vishwesh",city:"Madurai"}
// ];

// let b = groups.reduce((acumulator,groups,)=>{
//     groups.city
// })


//Array Methods:


//Slice ():

// const numbers=[ 1,2,3,4,5,6,7,8,9,0,true,"hi"];

// let b =numbers.slice(2,4);
// console.log(b);


// const numb=[ 1,2,3,4,5,6,7,8,9,0,true,"hi"];

// let c =numb.;
// console.log(c);


// let a ="vignesh";

// console.log(a.substr(2,3));

//Length():

// const numbers=[ 1,2,3,4,5,6,7,8,9,0,true,"hi"];

//  let b =numbers.length;
// console.log(b);



//Flattening an array using reduce

// let nestedarr=[[1,2],[3,4],[5,6]];

// let normalarr=nestedarr.reduce((acc,value)=>acc.concat(value)).flat().reverse();
// console.table(normalarr);




//Largest element in an array using reduce

// const arr=[23,45,21,87,37];
// let largest_element=arr.reduce((accumulator,current_value)=>{
//     return Math.max(accumulator,current_value);
// });

// console.log(largest_element);


// Slice();

// const arr=[1,2,3,4,5,6,7,8];

// console.log(arr.slice()); //returns a new array wih same elements

// console.log(arr.slice(2));// takes index 0 and 1 and prints the rest of the elements -[3,4,5,6,7,8];

// console.log(arr.slice(2,6));//[start,end] - [3,4,5,6]

// console.log(arr.slice(6,2));//gives an empty array

// console.log(arr.slice(-2,-5));//gives an empty arr;


//Splice(): -- changes original array

// const arr=[1,2,3,4,5,6,7,8];
// let b =arr.splice(2,3);
// console.log(arr);//[1,2]
// console.log(b);//gives an empty array

// console.log(b.splice(2));// removes index 0 and 1 and prints the rest of the elements in the array

// console.log(b.splice(2,3));//[index,length]- [3,4,5]- started from index 2 i.e element 3 and printed upto 3 elements;


// let b = arr.splice(2,0,24,25);//- can insert an element using array[index to insert,element to delete,value to insert,value to insert] - [this will insert 24 and 25 in second index] 
// console.log(arr);


//Concat in array


// const a=[1,2,3,4];

// const b=[5,6,7,8];

// const c =a.concat(b,9,9,9);//[1,2,3,4,5,6,7,8,9,9,9];
// console.log(c);



//Sort in array

// const num = [4,7,5,2,9,1,0];

// console.log(num.sort());//[0,1,2,4,5,7,9]

// const alpha =['cake','doll','eagle','apple'];

// console.log(alpha.sort());//[apple,cake,doll,eagle]

// Ascending order in sort using arrow function

// const Rand_num=[34,54,12,21,33,11,87,3];

// Rand_num.sort((a,b)=>{
//    return a-b;
// })

// console.log(Rand_num);



// Descending order in sort using arrow function

// const Rand_num=[34,54,12,21,33,11,87,3];

// Rand_num.sort((a,b)=>{
//     return b-a;
//  })
 
//  console.log(Rand_num);

 
//Sorting object in Ascending order using sort():

// const users=[
//     {Full_name:"Vignesh",Age:21,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Vishwesh",Age:23,City:"Kadappa",State:"Andhra pradesh"},
//     {Full_name:"Arun",Age:17,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Rajin",Age:21,City:"Kanoor",State:"Kerala"},
//     {Full_name:"Deep",Age:23,City:"Kolkata",State:"West Bengal"}
// ];

// users.sort((a,b)=>{
//    return a.Age-b.Age
// });

// console.log(users);


//Sorting object in Descending order using sort():


// const users=[
//     {Full_name:"Vignesh",Age:21,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Vishwesh",Age:23,City:"Kadappa",State:"Andhra pradesh"},
//     {Full_name:"Arun",Age:17,City:"Chennai",State:"Tamilnadu"},
//     {Full_name:"Rajin",Age:21,City:"Kanoor",State:"Kerala"},
//     {Full_name:"Deep",Age:23,City:"Kolkata",State:"West Bengal"}
// ];


// users.sort((a,b)=>{
//    return b.Age-a.Age;
// });


// console.log(users);


//Fill() in array:(value,start,end);



// const ordinary= [1,2,3,4,5];
// console.log(ordinary.fill(2)); - [2,2,2,2,2] - fills all the elements in the array with the given number




// const ordinary= [1,2,3,4,5];
// console.log(ordinary.fill(2,3)); // - [1,2,3,2,2] - fills the number 2 from the index 3



// const ordinary= [0,1,2,3,4,5,6,7,8,9];

// console.log(ordinary.fill(2,5,7));// - [0,1,2,3,4,2,2,7,8,9] - fills the number 2 from index 5 to index 7



//Includes() in Array


// const arr=['pencil','Pencil','rubber','scale'];

// console.log(arr.includes('rubber'));//true


// console.log(arr.includes('Scale'));// false


// console.log(arr.includes('pencil',1));//true - start searching from 1st index;


// let b = arr.map(values=>values.toLowerCase().includes('pen')  - using toLowerCase() we are changing the letters into lowercase nd checking whether
// );

// console.log(b);




//Join() in Array:


// const abc=['apple','banana','cat','doll','elephant'];

// console.log(abc.join());// default join symbol is ',';

// console.log(abc.join(' | '));//[a|b|c|d|e];


// console.log(abc.join(' + ')); //[a+b+c+d+e];


// console.log(abc.join(' - ')); //[a-b-c-d-e];






//Reverse() in array


// const number=[0,1,2,3,4,5,6,7,8,9];

// console.log("Before reverse : "+number);

// console.log("After reverse : "+number.reverse());


// Reversing an object using reverse() function

// const obj = {0:10,1:20,2:30,3:40,4:50,length:5};
// console.log(obj);

// Array.prototype.reverse.call(obj);
// console.log(obj);





//Push() in array - it is used to push an element inside an array at last
//Numbers

// const push = [1,2,3,4];

// push.push(5,4,6,7,21);
// console.log(push);


//Strings
// const str = ['Apple'];

// str.push("banana","Pinapple");
// // console.log(str);


//Push using spread operator

// const pull = ['carrot'];

// pull.push(...str,'beans');
// console.log(pull);




//Pop in array - removes an element from an array from last index


//Number

// const a = [1,2,3,4,5,6,7,8,9];


// a.pop();
// console.log(a);//[1,2,3,4,5,6,7,8];



//String

// const b =['arun','barun','vignesh','vinayak','bignesh'];

// b.pop();
// console.log(b);//['arun','barun','vignesh','vinayak'];

// pop and push is for adding and removing element from last 
//shift() is to remove the first element from an array







//Shift() - remove element from first


// //Number
// const tift = [1,2,3,4,5,6,7,8,9];
// tift.shift();
// console.log(tift);//[2,3,4,5,6,7,8,9];


// //String

// const strift=['jilo','helo','milo','polo'];

// strift.shift();

// console.log(strift);



//unshift -- adds element from first

// //Numbers
// const add = [1,2,3,5,6,7,8,9];
// add.unshift(0);

// console.log(add);


// //String
// const str = ['a','b','c'];
// add.unshift('z');

// console.log(add);



//indexOf() --to find the index of an specific element



// //Number
// const ab=[34,35,22,75,28,54,37];

// console.log(ab.indexOf(22));


// const ab=[34,35,22,75,28,54,37];

// console.log(ab.indexOf(22,1));//telling to search from where to start




// //String
// const ba=['arun','rajin','vishwesh','vignesh'];

// console.log(ba.indexOf('rajin'));





//lastIndexOf() --to find the last index of an specific element




// // //Number

// const ab=[34,22,35,22,75,28,54,37];
// console.log(ab.lastIndexOf(22));//3






// //String
// const ba=['arun','rajin','vishwesh','vignesh','rajin'];

// console.log(ba.lastIndexOf('rajin'));





// Every(Array) if all the condition satisfies, the output will be true else false

// const arr = [2,2,8,6,9];

// let resultt=arr.every((value)=>{
//     return value%2==0;
// })

// console.log(resultt);//false



//Some(Array)//if atleast one condition satisfies, the output will be true else false

// let answer=arr.some((value)=>{
//     return value%2==0;
// });

// console.log(answer);



//

// for(let i=0;i<=i+1;i++){
//  console.log(Number.isFinite(i));
// }


//Multiple ways to clone an Array

// 1. using spread operator

// const one = [1,2,3];

// const two =[...one];
// console.log(two);



//2. using Slice method

// const one = [1,2,3];

// const two =one.slice();
// console.log(two);




//3. using Concat 

// const one = [1,2,3];

// const two =[].concat(one);
// console.log(two);





//4.using Array from

// const one = [1,2,3];

// const two =Array.from(one);
//  console.log(two);





















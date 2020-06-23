//==========================Chapter#21-25
// Task1
// var first=prompt("Enter first name ");
// var last=prompt("Enter last name ");
// var fullName= "Full name is "+first+" "+last;
// alert(fullName);


// Task2
// var input=prompt("Enter your favrt mobile model");
// document.write("Your favrt mobile model is : "+input+"<br>");
// document.write("Length of string is : "+input.length);

// Task3
// var string="Pakistani"
// document.write("String is : "+string+"<br>");
// var count= string.indexOf("n");
// document.write("Index of 'n' :"+count);


// Task4
// var string = "Hello World";
// document.write("String is : " + string + "<br>");
// var count= string.lastIndexOf("l");
// document.write("Index of 'l' : "+count);

// Task5
// var string="Pakistani";
// document.write("String is : "+string+"<br>");
// ind=string.charAt(3);
// document.write("Char at index 3 is : "+ind)

// Task6

// var first=prompt("Enter first name ");
// var last=prompt("Enter last name ");
// var fullName= "Full name is "+first.concat(" "+last);
// alert(fullName);

// task7
// var city="Hydrabad";
// document.write("City is : "+city+"<br>")
// var city1=city.replace("Hydra","Islam");
// document.write("City after replacement is  : "+city1)


// Task8
// var line="Ali and Sami are best friends. They play cricket and football together.";
// document.write("Line before replacement : "+line+"<br>")
// var line1=line.replace(/and/g,"&");
// document.write("Line after replacement  : "+line1)

// Task9

// var value1= String(472);
// document.write("Value "+value1+"<br>");
// document.write(" Type : "+typeof(value1)+"<br>")
// var value1=Number(value1)
// document.write("Value : "+value1+"<br>")
// document.write(" Type : "+typeof(value1))

// Task10

// var value=prompt("Enter a name ");
// document.write("User input : "+value+"<br>")
// var value1=value.toUpperCase();
// document.write("Upper case : "+value1)

// Task11
// var input=prompt("Enter a string")
// var title=input.charAt(0).toUpperCase();
// var remString=input.slice(1)
// document.write(title+remString);





//Task12
// var num=35.36
// document.write("Number "+num+"<br>");
// var str=num.toString();
// document.write("Result "+str)

// Task13
// var input=prompt("Enter a username ");
// for(i=0;i<input.length;i++)
// if(input.charCodeAt(i)===33){
//     alert("please enter valid username")
// }else if(input.charCodeAt(i)===44){
//     alert("please enter valid username")
// }else if(input.charCodeAt(i)===46){
//     alert("please enter valid username")
// }else if(input.charCodeAt(i)===64){
//     alert("please enter valid username")
// }


//task14
// var store = ['cake', 'apple pie', 'cookie', 'chips','patties'];
//         var search = prompt("what do you want to buy");
//         var lowerCase=search.toLowerCase();
//         if (store. indexOf(lowerCase) !== -1) {
//             document.write("Yes " + lowerCase + " is available at index "+store.indexOf(lowerCase))
//         }
//         else {
//             document.write("Sorry " + lowerCase + " is not available")
//         }


//Task15

// var pass = prompt("Enter the password ", "Not start with number or max length is 6");
// var num = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57'];

// for (i = 0; i < num.length; i++)

// if (pass.charAt(0) === num[i] || pass.length > 6) {
//     console.log("please Enter a valid password");
// }

//Task16

// var string="University of karachi";
// var strSplit=string.split(" ")
// document.write(strSplit);

// Task17
// var input=prompt("Enter something");
// document.write("String is : "+input+"<br>");
// var lstIndex=input[input.length-1]
// document.write("Last char of str is : "+lstIndex);

// Task18
// var str="The quick brown fox jumps over the lazy dog"
// str.toLowerCase;
// document.write("Text : "+str+"<br>")
// var count = (str.match(/the/g) || []).length;
// ++count;
// document.write("There are "+count+" Occurrence(s) of Word 'the' ");



//==========================Chapter#26-30
//Task1
// var input=+prompt("Enter a positive integers");
// document.write("Value is : "+input+"<br>");
// var round= Math.round(input)
// document.write("Round value is : "+round+"<br>");
// var floor=Math.floor(input)
// document.write("Floor value is : "+floor+"<br>");
// var ceil=Math.ceil(input)
// document.write("Ceil value is : "+ceil);


// Task2


// var input=+prompt("Enter a negative value integers");
// document.write("Value is : "+input+"<br>");
// var round= Math.round(input)
// document.write("Round value is : "+round+"<br>");
// var floor=Math.floor(input)
// document.write("Floor value is : "+floor+"<br>");
// var ceil=Math.ceil(input)
// document.write("Ceil value is : "+ceil);

//Task3
// var input=+prompt("Write a number for absolute value ");
// var abs=Math.abs(input);
// document.write("The absolute value of "+input+" is "+abs)


// Task4
// var num=Math.random()*6;
// var ceel=Math.ceil(num);
// document.write("Random dice value is : "+ceel);


// Task5

// var heads=prompt("Enter the heads username");
// var tails=prompt("Enter the tails username ");
// var num=Math.random()*2;
// var toss=Math.floor(num);
// if(toss===0){
//     document.write("Heads!<br> "+heads+" Won the Toss");
// }else{
//     document.write("Tails!<br> "+tails+" Won the toss")
// }

//Task6

// var num=Math.random()*100;
// var value =Math.ceil(num);
// document.write("The random value between 1 to 100 is : "+value);

// Task7 pending
// var input=+prompt("Enter your weigth in kilograms");
// if(input===input||input===input+'kgs'||input===input+'kilograms'){
//     document.write("The weight of user is "+input+" kilograms")
// }

// //Task8
// var input=+prompt("Enter a number for play ");
// var secNumber=Math.random()*10;
// var ceel=Math.ceil(secNumber);
// if(input===ceel){
//     alert("congratulation you won")
// }else if(input!==ceel){
//     alert("Try Again ")
// }



//==========================Chapter#31-34
// Task1
// var date= new Date();
// document.write(date);

// Task2
// var month= new Date();
// var currentMonth=month.getMonth().toLocaleString();
// var indexValue=currentMonth.charAt();



// document.write("Current Month : "+indexValue);
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// alert("The current month is : " + monthNames[date.getMonth()]);

// Task3
// var date= new Date();
// var day=date.toString();
// currentDay=day.slice(0,3);
// alert("today is "+ currentDay);

// Task4
// var date= new Date();
// var day=date.toString();
// currentDay=day.slice(0,3);
// if(currentDay==='Sat'|| currentDay==='Sun'){
//     document.write("It's Fun day!")

// }
// Task5
// var date= new Date();
// var currentDay=date.getDate();
// if(currentDay<'16'){
    //     document.write("First fifteen days of the month")
    // }else{
//     document.write("Last days of the month")
// }

// Task6
// var date= new Date();
// document.write("Current Date : "+date+"<br>");
// var dateMili=date.getTime();
// document.write("Elapsed milisecond since january 1, 1970 : "+dateMili+"<br>");
// var dateMinutes=dateMili/(1000*60);
// document.write("Elapsed Minutes since january 1, 1970 : "+dateMinutes+"<br>");                           

// // Task7'
// var date=new Date();
// var hours=date.getHours();
// if(hours<12){
    //     document.write("Its AM")
    // }else if(hours>=12<24){
        //     document.write("Its PM")
// }
// task8

// var date= new Date("Dec 31,2020 ")
// alert(date)

//Task9
// var currentDate= new Date();
// var cDmili=currentDate.getTime();
// var ramzanDate = new Date("Jun 18,2015")
// var rDmili=ramzanDate.getTime();
// var diff=cDmili - rDmili;
// var dayss=diff/(1000*60*60*24 )
// document.write(Math.floor(dayss)+" days have passed since 1st ramzan, 2015")

// Task10
// var beg2015= new Date("Jan 1, 2015 ");
// var begMili= beg2015.getTime();
// var ref2015= new Date("Dec 05, 2015 22:50:16");
// var refMili= ref2015.getTime();
// var seconds= (refMili-begMili)/1000;
// document.write("On reference date : "+ref2015+"<br>"+seconds+" Seconds have been passed since beginning of 2015")


// // Task11
// var currentDate= new Date();
// document.write("Current Date : "+currentDate+"<br>");
// var hours=currentDate.getHours();
// var newdate= new Date()
// newdate.setHours(hours -1 ); 
// document.write("1 hour ago, it was : "+newdate);


// Task12
// var currentDate= new Date();
// document.write("Current Date : "+currentDate+"<br>");
// var newYear= new Date();
// newYear.setFullYear(1920);
// document.write("100 years back , it was  : "+newYear);



// Task13

// var inputAge=+prompt("Enter your age ");
// document.write("Your Age is : "+inputAge+"<br>");
// var date= new Date();
// var cYear=date.getFullYear();
// var birthYear = cYear - inputAge;
// document.write("Your birthyear is : "+birthYear)


// Task14
// document.write("<h1>K-Electric bill</h1>")
// var customer =prompt("Enter the customer name");

// var month=prompt("Enter the Billing Month");

// var noUnit=prompt("Enter the Consumed unit");

// var unitPrice=prompt("Enter the Charges per unit")

// document.write("Customer Name  : "+customer+"<br>")
// document.write("Month  : "+month+"<br>")
// document.write("Number of units : "+noUnit+"<br>")
// document.write("Charges per unit : "+unitPrice+"<br>");
// var netAmount=unitPrice*noUnit;
// document.write("Net Amount Payable (within Due Date) : "+netAmount.toFixed(2)+"<br>");
// var lateCharges=350;
// document.write("Late Payment Surcharge : "+lateCharges+"<br>");
// var duePayment=netAmount+lateCharges;
// document.write("Gross Amount Payable (after Due Date) : "+duePayment.toFixed(2)+"<br>");


//==========================Chapter#35-38 
// Task1
// function currentDate(){
//     date = new Date();
//     document.write(date);
// }
// currentDate();
// Task2
// function fullName(){
//     var a=prompt("Enter Fisrt name ");
//     var b=prompt("Enter Second name ");
//     var c=a+" " +b;
//     document.write("Fullname is : "+c)
// }
// fullName();
//Task3
// function Add(){

//     var firstNumber=+prompt("Enter first number");
//     var secondNumber=+prompt("Enter second number");
//     return firstNumber+secondNumber;   
// }
// alert("Sum is " +Add() );

// // Task4
// function calculator(num1,oprtr,num2){
//      if(oprtr==="+"){
//          return num1+num2;
//      }else if (oprtr==="-"){
//          return num1-num2;
//      }else if (oprtr==="/"){
//          return num1/num2
//      }else if(oprtr==="*"){
//          return num1*num2
//      }else{
//          alert("Enter the valid operator")
//      }

// }
// alert("Result is  : "+calculator(+prompt("Enter 1 no"),prompt("select oprtr"),+prompt("Enter 1 no")))

// Task5
// function square(a){
//     return a**2;
// }
// alert("Square is " + square(prompt("Enter the number for square ")));

// Task6

// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var num=+prompt("Enter a number")
//   answer = factorial(num)
//   alert("The factorial of " + num + " is " + answer);
//Task7
// function counting(a,b){
    
//     for (i = a; i <= b; i++) {
//         document.write(i+"<br>");
//       }
// }
// counting(+prompt("Enter starting point"),+prompt("Enter second value"))

// // Task8


// function hypo( base, perpendicular) {
    

//     // helper nested function to use below
//     function Square() {
//       return base**2 +  perpendicular**2;
//     }
  
//     alert( "hypo square is =  " + Square() );
// }
// document.write(hypo(+prompt("Enter the value of base to find the hypo square"),+prompt("Enter the value of perpendicular to find the hypo square")))




// Task9


// function area(width,height){
//     return alert("Area is "+ width*height);
// }
// area(10,10)
// // Task10
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    document.write( palindrome(prompt("Enter a string")));


//Task11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// Task12

// function longWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(longWord('Web Development Tutorial'));


// Task13

// function char_count(str, char) 
// {
//  var Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == char) 
//       {
//       Count += 1;
//       }
//   }
//   return Count;
// }

// document.write(char_count('w3resource.com', 'o'));


// Task14
// function calcCircumference(a){
//     var Cir=2*3.14*a;
//     return alert("The circumference is "+ Cir);
    
// }
// calcCircumference(prompt("Enter the radius to find the cirumference "))
// function calcArea(a){
//     var area=3.14*a**2;
//     return alert("Area is "+area);
    
// }
// calcArea(prompt("Enter the radius to find the Area "))

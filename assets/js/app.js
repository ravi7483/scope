var cl = console.log;

// function ==> it is block of code to perform a specific task and its purpose is reusability

// var :- var is keyword and it is used to declare a variable.

// variable :- it is used to store the values / data.



// scope :- availibility and accesibility of a variable

// two types of scope :-

      // 1) local :- which is accesibile only within the function
 
     // 2) global :- available throughout the program form where it is  declared.  		
	 
	 var a = 100; // global scope
	 cl(a);
	 
	 function Add3Num(){
		 var b = 100 + 100 + 100;
		 var result = a + b;
		cl(b);	
		cl(a);
		cl(result);
	 }
	 Add3Num();
	 cl(a);

	 // cl(b);  local scope 
	 
	 
	 
var x = 10; // global scope 
cl(x);	

function Add3Num(){
	var result = 10 +20 +30;
	cl(result); // local scope
	cl(x);
}
Add3Num();	 	  
	 
function Sub4Number(x,y,z,a){
	var result = x - y - z - a;
	cl(result);
	 return result;
}	 
var result= Sub4Number(90,80,70,60,50);
cl(result);
document.write(result);
// alert(result);
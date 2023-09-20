

let age ;
let check ;


document.getElementById("age_btn").onclick = function (){

    age = document.getElementById ("age").value;
    age =  Number(age);
    console.log (age);
    check = Boolean(age);
   if(check){
    
    age++;
    document.getElementById("age_h1" ).innerHTML = "on Your birthday you will be " + age + " years old";

   }else{

    document.getElementById("age_h1" ).innerHTML = "Please Enter your age";


   };

}

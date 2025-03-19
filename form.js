function validateForm(e){
    e.preventDefault();
    let isValid=true;
   let passwordVal= document.getElementById("exampleInputPassword1").value;
   let emailVal= document.getElementById("exampleInputEmail1").value;

   if(passwordVal.length<8){
    isValid=false;
    document.getElementById("errorPaaword").innerHTML="Password length should be greater than 8!";
   }
   let users=JSON.parse(localStorage.getItem('user-Data'))||[];

   let userAuth=users.find(item=>item.email===emailVal &&item.password===passwordVal);

   if(!userAuth){
    isValid=false;
    document.getElementById("errorUser").innerHTML="Either the Email or Password is wrong!";
   }
   else{
    document.getElementById("errorUser").innerHTML="Login Successfully!!!";
   }
   if(isValid){
    document.getElementById("errorPaaword").innerHTML="";

    localStorage.setItem("user-Login",JSON.stringify({login:true}));
    location.href="./index.html";
   }
   return isValid;

}

function validateSignUpForm(){
    event.preventDefault();
    let isValid=true;
    let nameVal=document.getElementById("exampleInputName").value;
    let passwordVal= document.getElementById("exampleInputPassword1").value;
    let cpasswordVal= document.getElementById("exampleInputCPassword1").value;
    let emailVal= document.getElementById("exampleInputEmail1").value;
    if(nameVal.length<1){
        isValid=false;
        document.getElementById("errorName").innerHTML="Name field cannot be Empty";
       }
    if(passwordVal.length<8){
     isValid=false;
     document.getElementById("errorPaaword").innerHTML="Password length should be greater than 8!";
    }
    if(passwordVal!==cpasswordVal){
        isValid=false;
        document.getElementById("errorCPaaword").innerHTML="Password and Confirm Password should be same";
       }

       if(isValid){
        let userData={
            name:nameVal,
            password:passwordVal,
            email:emailVal
        }

       let users=JSON.parse(localStorage.getItem('user-Data'))||[];
       users.push( userData);
       localStorage.setItem("user-Data",JSON.stringify(users));

       document.getElementById("errorName").innerHTML="";
       document.getElementById("errorPaaword").innerHTML="";
       document.getElementById("errorCPaaword").innerHTML="";
    location.href="./index.html";
       }
       return isValid;
}

function paymentValidation(e){

    e.preventDefault();
    let isValid=true;
   let name= document.getElementById("name").value;
   let card= document.getElementById("card").value;
   let exprdate= document.getElementById("exprdate").value;
   let cvv= document.getElementById("cvv").value;
   const cardregex = /^\d{16}$/;
   const monthregex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
   if(name.length<1){
    isValid=false;
    document.getElementById("errorName").innerHTML="Name field cannot be Empty";
   }

   if(card.length<16){
    isValid=false;
    document.getElementById("errorcard").innerHTML="Card number length should be 16";
   }
   if(!cardregex.test(card)){
    isValid=false;
    document.getElementById("errorcard").innerHTML="Give you card number like this 1234 5678 9012 3456 ";

   }

 if(!monthregex.test(exprdate)){
    isValid=false;
    document.getElementById("errordate").innerHTML="Give you expire date  number like this MM/YY ";

   }
   if(cvv.length<3 || cvv.length>3){
    isValid=false;
    document.getElementById("errorcvv").innerHTML="CVV number length should be 3";
   }
   if(isValid===true){
    document.getElementById("errorName").innerHTML="";
    document.getElementById("errorcard").innerHTML="";
    document.getElementById("errordate").innerHTML="";
     document.getElementById("errorcvv").innerHTML="";
   }

   return isValid;
}
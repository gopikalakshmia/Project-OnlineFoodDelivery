function validateForm(e){
    e.preventDefault();
    let isValid=true;
   let passwordVal= document.getElementById("exampleInputPassword1").value;
   let emailVal= document.getElementById("exampleInputEmail1").value;
   console.log(passwordVal);
   if(passwordVal.length<8){
    isValid=false;
    document.getElementById("errorPaaword").innerHTML="Password length should be greater than 8!";
   }
   let users=JSON.parse(localStorage.getItem('user-Data'))||[];
   console.log(users);
   let userAuth=users.find(item=>item.email===emailVal &&item.password===passwordVal);
   console.log(userAuth);
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
console.log(isValid);
       if(isValid){
        let userData={
            name:nameVal,
            password:passwordVal,
            email:emailVal
        }
console.log(userData);
       let users=JSON.parse(localStorage.getItem('user-Data'))||[];
       users.push( userData);
       localStorage.setItem("user-Data",JSON.stringify(users));
       console.log(users);
       document.getElementById("errorName").innerHTML="";
       document.getElementById("errorPaaword").innerHTML="";
       document.getElementById("errorCPaaword").innerHTML="";
    location.href="./index.html";
       }
       return isValid;
}
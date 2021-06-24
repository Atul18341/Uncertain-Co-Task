const createName= function(first,last) {return first +" "+last}

const askName=function(){
    var first=prompt("Enter First Name:");
    var last=prompt("Enter Last Name:");
    var fullname=createName(first,last)
    alert("Your name is "+fullname)
    
}

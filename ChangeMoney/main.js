
function Convert(){
  
    if( from == "VND" && to == "VND"    ){
        document.getElementById("Result").innerHTML = "Result: " + Amount +  "VND" ; }
     if( from == "VND" && to == "USD"){
            document.getElementById("Result").innerHTML = "Result:" +  Amount / 23000 + "USD" ;}
       if ( from == "USD" && to == "USD"){
        document.getElementById("Result").innerHTML = "Result:" + Amount + "USD";
       } 
       if ( from == "USD" && to == "VND"){
        document.getElementById("Result").innerHTML = "Result:" + Amount * 23000 + "VND"; 
       }

}
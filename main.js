function notvalid(){
    alert("This feature is in development...Taking to alternatives...PRESS OK")
}

let prev=document.querySelectorAll('.container1')[0].innerHTML;
console.log(prev);
 comeback=()=>{
     document.querySelectorAll('.container1')[0].innerHTML=prev;
  }
function clicked(){
    document.querySelectorAll('.container1')[0].innerHTML="<h1>ABHI SEARCH KAAM NHI<br>KR RHA HAI<br>THORI DER BAAD KARNA</h1>";
    setTimeout(comeback,3000);
}
/*
function hello(name)
{
  console.log("hello "+name);  
}
hello("jon");

const v=10;

if(v>10)
{
    console.log("v>10");
}
else{
    console.log("v<=10");
}

*/



//setInterval(()=>{
  //  console.log("practice");
//},3000);

//setTimeout(()=>{
 //   console.log("end");
//},3000);


//module ->라이브러리임 남들이 짜놓은걸 쓸 수 있음
 //log.js 불러오기
const k=require("./logger.js");
k.show("hello "+k.p);

const express =require('express'); //npm install express
const app=express();

app.use("/script",express.static(__dirname+"/script"));
app.listen(3000,()=>{
    console.log("hello");
})
//스크립트는 커맨드 옵션 i

//처리해주는 루틴들을 추가
app.get("/",(req,res)=>{
    console.log("root");
    res.sendFile(__dirname+"/pages/index.html");
});

app.get("/about",(req,res)=>{
    console.log("=>about");
    res.sendFile(__dirname+"/pages/about.html");
});
app.get("/working",(req,res)=>{
    console.log("working");
    res.sendFile(__dirname+"/pages/working.html");
})

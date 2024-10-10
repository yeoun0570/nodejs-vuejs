const express = require("express"); //express서버 객체 생성
const app = express(); //초기화
const port = 3000;

app.get("/", (req,res) => {
    res.set({"Content-Type" : "text/html; charset=utf-8"});
    res.end("Hello Express. 반갑습니다.");
});

app.listen(port,() => {
    console.log(`START SERVER : use ${port}`);
});
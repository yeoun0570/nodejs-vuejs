const url = require("url");
const express = require("express"); //express서버 객체 생성
const app = express(); //초기화
const port = 3000;


//1) GET 메서드 라우팅 설정
app.get("/", (_, res) => res.end("HOME")); //req는 기본이기 때문에 _로 대체 가능하다.
app.get("/user", user);
app.get("/feed", feed);


//2)
function user(_,res) {
    const user = url.parse(_.url, true).query;
    res.json(`[user] name : ${user.name}, company : ${user.company}`); //결과값을 JSON형태로 가져오기
}

function feed(_,res) {
    res.json(
        `<ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
        </ul>`
    ); //feed에 대한 결과값 JSON 형태로 설정
}


app.get("/", (_,res) => {
    res.set({"Content-Type" : "text/html; charset=utf-8"});
    res.end("Hello Express. 반갑습니다.");
});

app.listen(port,() => {
    console.log(`START SERVER : 익스프레스 라우터 리팩토링`);
});
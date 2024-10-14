const express = require("express");
const handlebars = require("express-handlebars");
const mongodbConnection = require("./configs/mongodb-connection.js");
const app = express();

//req.body와 POST 요청을 해석하기 위한 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.connect = require("./configs/mongodb-connection.js");

app.engine("handlebars", 
    handlebars.create({
        hepers:require("./configs/handlebars-helpers"),
    }).engine); //express서버에 템플릿 엔진등록

app.set("view engine", "handlebars"); //웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set("views", __dirname+"/views"); //뷰디렉터리를 views로 설정(__dirname : node를 실행하는 경로)

//라우터 설정
app.get(
    "/", (req,res) => {
        res.render("home",{title:"테스트 게시판"});
    }
);

app.get("/write", (req,res) => {
    res.render("write", {title: "게시판 등록"});
});

app.get("/detail/:id", (req,res) => {
    res.render("detail", {
        title:"게시판 상세보기",
    })
});

let collection; //글로벌 변수(전역변수)

app.listen(3000, async () => { //전체 컬렉션을 가져올 때까지 대기해야되기 때문에 async-await 사용
    console.log("Board Service Server started!");
    const MongoClient = await mongodbConnection();
    collection = MongoClient.db('board').collection("post");
    console.log("MongoDB Connected");
});
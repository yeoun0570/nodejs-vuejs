const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

//몽구스에서 쿼리에 필터를 빈 객체인 {}로 넣으면 모든 값을 불러오게 된다.
//데이터가 많을 경우 처리지연 문제가 발생할 수 있어서 무한 로딩시 에러를 내도록 설정하는 'strictQuery'를 해야한다.
mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.json()); //bodyParser.json() 미들웨어를 추가하여 HTTP에서 Body를 파싱
app.listen(3000, () => {
    console.log("Server started");
    const mongdbUri = "mongodb+srv://yeoun0570:lSOWwsGxNn84NpKk@cluster0.0dagz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose
    .connect(mongdbUri)
    .then(console.log("Connected to MongoDB"))
});


//모든 person 데이터 출력
app.get("/person", async (req, res) => {
    const person = await Person.find({}); //find({}) : 안에 있는 모든 정보들을 찾기
    res.send(person);
});

//특정 이메일로 person 찾기
app.get("/person/:email", async (req,res) => {
    //findOne({}) : 안에 있는 것중 하나의 정보 찾기
    //email: req.params.email로 Person의 email 부분을 이용해서 검색
    const person = await Person.findOne({ email: req.params.email}); 
    res.send(person);
});

//person 데이터 추가하기
app.post("/person", async (req,res) => {
    const person = new Person(req.body);
    //save() : 저장
    //person을 Person 요청의 몸통 부분을 가지고 오고 그것을 save(). 즉, 저장함
    await person.save();
    res.send(person);
});

//person 데이터 수정하기
app.put("/person/:email", async (req,res) => {
    //findOneAndUpdate({}) : findOne({})랑 동일한 방식으로 검색하고 $set으로 검색한 값을 수정
    //                        수정하는 값은 요청 몸통을 전부 수정하였고 new: true로 새로워진게 항상 참으로 설정
    const person = await Person.findOneAndUpdate(
        {email: req.params.email},
        {$set: req.body},
        {new: true}
    );
    console.log(person);
    res.send(person);
});

//person 데이터 삭제하기
app.delete("/person/:email", async (req,res) => {
    //deleteMany({}) : findOne처럼 검색하는 것과 형식은 비슷하지만 결과는 다름. 검색이 아니라 삭제됨
    await Person.deleteMany({email: req.params.email});
    res.send({success: true});
});
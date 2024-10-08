const express = require("express"); //express서버 객체 생성
const app = express();

let posts = []; //게시글 목록으로 사용할 posts에 빈 리스트 할당

//req.body를 사용하려면 JSON 미들웨어를 사용해야 한다.
app.use(express.json()); //JSON 미들웨어를 활성화
//POST 요청시 컨텐트 타입이 application/x-www-form-rulencode 인 경우 파싱
app.use(express.urlencoded({extended : true}));

app.get("/", (_,res) => {   // root로 요청이 오면 실행
    res.json(posts);    //게시글 리스트를 JSON형태로 보여주겠다.
});

app.post("/posts", (_,res) => {
    const { title, name, text } = _.body;

    //map은 push
    posts.push({id: posts.length + 1, title, name, text, createDt : Date()}); //posts 배열에 넣는것
    res.json({title, name, text});
});

app.delete("/posts/:id", (_,res) => {
    const id = _.params.id;
    const filterPosts = posts.filter((post) => post.id !== +id); //글 삭제 로직
    const isLengthChanged = posts.length !== filterPosts.length; //삭제 확인

    posts = filterPosts;
    if(isLengthChanged) {
        res.json("OK : ", isLengthChanged);
        return;
    } else {
        res.json("Not Changed! : ", isLengthChanged);
    }
});

app.listen(3000, () => {
    console.log("Welcome posts board Service START!!");
});
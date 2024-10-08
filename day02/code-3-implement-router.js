const http = require("http");
const url = require("url"); //url 모듈로딩, 추후에 프로젝트에선 백서버 url을 입력하지 않을까?


const user = (req, res) => {
    //path명을 할당. 즉, 경로할당
    const userInfo = url.parse(req.url, true).query; //쿼리 스트링 데이터를 userInfo에 할당
    res.end(`[user] name : ${userInfo.name}, company : ${userInfo.company}`); //user에 대한 결과값 설정
};


const feed = (req, res) => {
    res.end(
        `<ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
        </ul>`
    ); //feed에 대한 결과값 설정
}

const notfound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found"); //에러메시지 설정
}; 


const urlMap = {
    "/" : (req,res) => res.end("HOME"),
    "/user" : user,
    "/feed" : feed,
};


http.createServer((req, res) => {
    //path명을 할당. 즉, 경로할당
    const path = url.parse(req.url, true).pathname; //true는 path뒤에 쿼리와 프래그먼트가 들어와도 받아주겠다라는 뜻

    res.setHeader("Content-Type", "text/html", "charset=utf-8"); //한글 깨짐 방지 추가


    if(path in urlMap) {
        urlMap[path](req, res);
    } else {
        notfound(req,res);
    }

}).listen("3000", () => console.log("OK 라우터 서버!"));  
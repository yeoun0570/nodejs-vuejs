const http = require("http");
const url = require("url"); //url 모듈로딩, 추후에 프로젝트에선 백서버 url을 입력하지 않을까?


const user = (req, res) => {
    res.end("[user] name : yeoun, company : ssg"); //user에 대한 결과값 설정
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


http.createServer((req, res) => {
    //path명을 할당. 즉, 경로할당
    const path = url.parse(req.url, true).pathname; //true는 path뒤에 쿼리와 프래그먼트가 들어와도 받아주겠다라는 뜻

    res.setHeader("Content-Type", "text/html", "charset=utf-8"); //한글 깨짐 방지 추가

    //if문을 통한 라우팅
    if(path === "/user") {
        user(req, res); //user에 대한 함수 실행
    } else if (path === "/feed"){
        feed(req, res); //feed에 대한 함수 실행
    } else {
        notfound(req, res); //notfound 대한 함수 실행
    }

}).listen("3000", () => console.log("OK 라우터 서버!"));
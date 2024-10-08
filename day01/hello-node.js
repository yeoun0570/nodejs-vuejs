const http = require("http"); //http 객체 생성
let count = 0;

//노드 서버 객체 생성
const server = http.createServer((req, res) => {
    console.log((count+=1));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("hello! nodeJs\n");

    setTimeout(()=>{
        res.end("SSG-4th-end");
    },2000);

    // process.exit(0); //성공코드로 종료
    // process.exit(1); //실패코드로 종료
    // server.close(() => console.log("process terminated"));
});


server.listen(8000,()=>console.log("Hello Node.js"));
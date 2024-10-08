import http from "k6/http"; //테스트툴 import

//100명의 유저가 10초동안 req를 날리는 것
export const options = { //테스트 옵션 세팅
    vus:100,    //가상 유저(virtual users)
    duration:"10s", //몇초동안 테스트를 진행할 지 세팅
};

//테스트에 사용할 함수 지정
export default function() {
    http.get("http://localhost:8001"); //hello.js를 GET방식으로 테스트
}

//즉, 100명의 유저가 10초동안 8001에 동시에 계속해서 요청을 보낸다는 의미이다.
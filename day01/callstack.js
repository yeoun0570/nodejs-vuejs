//자바스크립트 엔진은 자바스크립트를 실행하는 힙과 콜스택을 갖고 싱글스레드로 실행
//싱글스레드 : 콜스택이 하나를 가지고 있다. --> 한번에 하나의 작업만 가능

function func1(){
    console.log("func1");
    func2();
    return;
}

function func2(){
    console.log("func2");
    return;
}

func1();
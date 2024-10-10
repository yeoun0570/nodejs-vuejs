function waitOneSecond(msg) { //1초 대기하고 전달받은 메시지를 출력
    return new Promise((resolve,_) => {
        setTimeout(() => resolve(`${msg}`), 1000); //setTimeout은 Promise를 return하지 못해서 직접 반환 그렇기 때문에 async가 아닌 Promise를 활용
    });
}

async function countOneToTen() { //10초동안 1초마다 메시지를 출력
    for(let x of [...Array(10).keys()]) {
        let result = await waitOneSecond(`${x+1}초 대기중...`);
        console.log(result);
    }
    console.log("process end");
}

countOneToTen();
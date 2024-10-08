const DB = [];

//1. 회원가입 API 함수 
function register(user) {
    return saveDB(user, function(user) {
        return sendEmail(user, function(user) {
            return getResult(user);
        });
    }); 
} //콜백이 3중으로 중첩된 함수


//2. DB에 저장 후 콜백 실행
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB SAVE`);
    return callback(user);
}


//3. 이메일 발송 로그만 남기고 코드 실행 후 콜백 실행
function sendEmail(user, callback) {
    console.log(`eamil to ${user.email}`);
    return callback(user);
}


//4. 회원가입 결과 메시지
function getResult(user) {
    return `success register ${user.name}`;
}


//5.push할 값 작성
const result = register({email : "yeoun0570@gamil.com,", password : "1234", name : "yeoun"});
console.log(result);
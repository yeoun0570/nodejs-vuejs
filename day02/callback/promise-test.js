const DB = [];

function saveDB(user) {
    const oldDBsize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB SAVE success`);

    return new Promise(
        (resolve, reject) => {
            if(DB.length > oldDBsize) { 
                resolve(user); //성공시 유저 정보 반환
            } else {                    
                reject(new Error("save DB user failed")); //실패시 메시지 작성
            }
        }
    );
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise(
        (resolve) => {
            resolve(user);
        }
    );
}

function getResult(user) {
    return new Promise(
        (resolve, reject) => {
            resolve(`success register ${user.name}`); //성공시 성공 메시지와 유저명 반환
        }
    );
}

function registerByPromise(user) {
    const result = saveDB(user).then(sendEmail).then(getResult).catch(error => new Error(error));
    console.log(result);
    return result;
}

const myUser = {email : "yeoun0570@gamil.com,", password : "1234", name : "yeoun"};
// const result = registerByPromise(myUser);
const allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]); //비동기 방식으로 동시에 처리
allResult.then(console.log);
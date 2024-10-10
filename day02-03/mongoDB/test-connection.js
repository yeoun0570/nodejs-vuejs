const { MongoClient } = require("mongodb");

//1. 몽고디비를 불러올 uri 작성
// mongodb+srv : 몽고db아틀라스 프로토콜
// 드라이버에서는 <호스트명>+<도메인네임>으로 DNS에 서버 주소를 질의한다.
// 데이터베이스 이름 : 여기엔 아직 정의x
// retryWrites=true : 네트워크 오류가 발생하거나 정상적인 연결이 어려울 때 쓰기 작업을 자동으로 재시도 하는 옵션
// w=majority : 쓰기를 시도할 때 majority(다수)의 인스턴스에 쓰기 요청을 전달하고 성공확인을 받는다.
const uri = "mongodb+srv://yeoun0570:lSOWwsGxNn84NpKk@cluster0.0dagz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


//2. 몽고클라이언트 생성(uri를 통해서)
const client = new MongoClient(uri);

async function run() { //async-await으로 Promise를 반환
  await client.connect(); //몽고DB 접속시도
  const adminDB = client.db('test').admin(); //admin 유저의 인스턴스를 가져옴
  const listDatabases = await adminDB.listDatabases(); 
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
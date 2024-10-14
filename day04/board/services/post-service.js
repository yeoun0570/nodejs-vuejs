//글쓰기 기능
async function writePost(collection,post) { //post를 board컬렉션에 저장하는 함수
    //생성일시와 조회수를 생성
    post.hits = 0;
    post.createDt = new Date().toISOString(); //날짜는 ISO포맷으로 저장
    return await collection.insertOne(post); //몽고디비에 post를 저장 후 결과 반환, 다 가져올때까지 기다려야하니 await걸어놓음
}

module.exports = {  //require()포 파일을 import할 때 외부로 노출하는 객체를 모아두는 기능
    writePost,
}
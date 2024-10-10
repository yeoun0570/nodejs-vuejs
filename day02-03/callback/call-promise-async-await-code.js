const axios = require("axios"); //axios 임포트

//url 가져오기

async function getTop20Movies() {
const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json"; 

    try {
        //1. 네트워크에서 데이터를 받아오니까 await로 기다려!
        const result = await axios.get(url);
        //2. result에서 data 프로퍼티를 추출해 냄
        const {data} = result;
        if(!data.articleList || data.articleList.size == 0) {
            throw new Error("no data");
        }

        const movieInfos = data.articleList.map((article,idx) => {
            return {title :article.title, rank : idx + 1}
        });

        for(let movieInfo of movieInfos) {
            console.log(`[${movieInfo.rank}]위 ${movieInfo.title}`);
        }
    } catch(err){
        throw new Error(err);
    }
}

getTop20Movies();

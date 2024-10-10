const axios = require("axios"); //axios 임포트

//url 가져오기
const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json"; 


axios
    .get(url)
    .then((result) => {
        if(result.status !== 200) {
            throw new Error("요청이 실패하였습니다.")
        }

        else if(result.data) {
            return result.data;
        }

        else {throw new Error("데이터가 없습니다.");}
    })
    .then(
        (data) => {
            if(!data.articleList || data.articleList.size == 0){ //가져온 url을 확인해보면 articleList로 묶여있다
                throw new Error("데이터가 없습니다.");
            }
            return data.articleList; //영화리스트 반환
        }
    )
    .then(
        (articles) => {
            return articles.map((article,idx) => {
                return {title : article.title, rank : idx + 1};
            });
        }
    )
    .then(
        (results) => {
            for(let movieInfo of results) {
                console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
            }
        }
    )
    .catch(
        (err) => {
            console.log("<<error>>");
            console.log(err);
        }
    );
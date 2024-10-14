module.exports = {
    //1. 리스트 길이 반환
    lengthOfList : (list = []) => list.length,

    //2. 두 값이 같은지 비교여부(eq => equal의 약자)
    eq:(value1, value2) => value1 === value2,

    //3. ISO 날짜 문자열에서 날짜만 반환
    dateString : (isoString) => new Date(isoString).toLocaleDateString(),
}

//ISO 방식 : 2024-10-11T15:26 문자열로 저장된다.
async function myName1(){
    return "ssg1";
}

async function myName2(){
    return "ssg2";
}

async function showName() {
    const name1 = await myName1();
    const name2 = await myName2();
    console.log(name1);
    console.log(name2);
}
console.log(showName());
//person 모델 생성하기

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const personSchema = new Schema(
    { //document, DDL하는 짓과 매우 흡사
        name : String,
        age : Number,
        email : {type: String, require: true},
    }
);

module.exports = mongoose.model('Person', personSchema); //person 모델 객체 생성
//여기까지 스키마 생성
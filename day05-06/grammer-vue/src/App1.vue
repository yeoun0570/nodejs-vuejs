<script>
  export default {
    data : function () { //data속성 사용방법1
      return {
        user: {
          name : 'ssg',
          company : 'ssg.com',
          gender : 'male',
          age : 30,
        },
      };
    },

    // data() { //data속성 사용방법2
    //   return {};
    // },
  }
</script>

<template>
  <!-- {{}} : mustach syntax(콧수염 문법) 
    => <script></script>에서 지정한 변수 사용 가능-->

  <h1 v-show="condition">user 객체 출력</h1>
  <ul>
    <li v-for="(value,key,index) in user" :key="index">
      인덱스 : {{ index + 1 }}
      키 : {{ key }}
      값 : {{ value }}
    </li>
  </ul>
</template>

<style>
  .blue-color {
    color : blue;
  }
</style>
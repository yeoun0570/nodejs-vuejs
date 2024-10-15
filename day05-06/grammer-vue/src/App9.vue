<script>
    export default {
        data () {
            return {
               lastName: 'Yoon',
               firstName: 'YeoUn',
               numArray: [1,2,3,4,5,6,7,8,9,10],
            };
        },
        computed: {
           fullName() {
            console.log('couputed fullName');
            return `${this.lastName} ${this.firstName}`
           },

           evenSum() {
            return this.numArray.filter((value) => value % 2 == 0).reduce((acc,cur) => acc+cur,0);
           },
        }
    }
</script>

<template>
  <h4>{{ fullName }} {{ fullName }}</h4>
  <h4>{{evenSum}}</h4>
</template>

<style>
</style>
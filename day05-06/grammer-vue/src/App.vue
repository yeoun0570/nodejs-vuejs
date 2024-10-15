<script>
    export default {
        data () {
            return {
              array: [0,1,2],
              obj: {name: 'yeoun'},
            };
        },
        watch: {
              array: {
                handler(newValue, oldValue) {
                  console.log(`old Value: ${oldValue}`);
                  console.log(`new Value: ${newValue}`);
                },

                deep: true,
              },
              
              obj: {
                handler(newValue, oldValue) {
                  console.log(`old Value: ${JSON.stringify(oldValue)}`);
                  console.log(`new Value: ${JSON.stringify(newValue)}`);
                },

                deep: true,
              }
          },
        }
</script>

<template>
  <h4 style="color : blue">{{ array }}</h4>
  <h4>{{ obj }}</h4>
  <button @click="array.push(3)">배열값 추가</button>
  <button @click="obj.company = 'ssg.com'">객체 속성 추가</button>
</template>

<style scoped>
  /* 방법1 */
  @import './assets/main.css'; 
  /* 방법2 */
  @import '@/assets/main.css';
</style>
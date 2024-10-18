<script setup>
//옵션스API의 beforeMount사용과 동일
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onBeforeMount(
    () => {
        const name = route.query.name;
        const age = route.query.age;
        console.log(`name: ${this.name}, age : ${this.age}`)
    },
)
</script>


<!-- <script setup>
//옵션스API의 beforeMount사용과 동일
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const id = route.params.id;
//userRoute.params.id; 위와동일
console.log(id);
</script>

<template>
    <h1>id : {{ id }}</h1>
</template> -->



<!-- <script>
export default {
    beforeMount() {
        const name = this.$route.query.name;
        const age = this.$route.query.age;
        console.log(`name : ${this.name}, age : ${this.age}`)
    },
}
</script> -->
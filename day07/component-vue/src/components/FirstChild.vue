<script>
    export default{
        beforeUnmount() {
            console.log('beforeUnmount');
        },

        unmounted() {
            console.log('unmounted');
        }
    }
</script>

<template>
    <h1>컴포넌트</h1>
    <p>First Component</p>
</template>

<style>
    h1{
        color: blue;
    }
    
    p {
        color: blueviolet;
    }
</style>
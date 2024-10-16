<script>
export default {
    emits: ['print-hello'],

    methods: {
        parentEventCall() {
            this.$emit('print-hello','ssg',20);
        },
    },
};
</script>

<template>
    <button @click="$emit('print-hello','ssg',20)">클릭</button>

    <button @click="parentEventCall">클릭</button>
</template>

<template>
    <h1>Header</h1>
    <slot name="header">
        <h2>Default Header</h2>
    </slot>

    <h1>Main</h1>
    <slot name="main">
        <h2>Default Main</h2>
    </slot>


    <h1>Footer</h1>
    <slot name="footer">
        <h2>Default Footer</h2>
    </slot>
</template>

<style scoped>
  h2 {
    color: red;
  }
</style>
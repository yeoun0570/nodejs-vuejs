<script>
    export default {
        data () {
            return {
                beverages: {
                    americano: 4500,
                    latte: 5000,
                    vanila: 5500
                },
                selectedBeverage: '', // 선택된 음료 이름
                result: '' // 선택된 음료의 가격
            };
        },
        methods: {
            onChangeHandler($event) {
                // 선택된 음료의 id 가져오기
                this.selectedBeverage = $event.target.value;

                // 선택된 음료의 가격을 result에 저장
                this.result = `${this.beverages[this.selectedBeverage]}원`;
            },

            onKeyupHandler() {
               console.log('keyup event!!');
           }
        }
    }
</script>

<template>
    <div>
        <select v-model="selectedBeverage" @change="onChangeHandler">
            <option value="americano">아메리카노</option>
            <option value="latte">카페라떼</option>
            <option value="vanila">바닐라라떼</option>
        </select>

        <p>선택한 음료의 가격: {{ result }}</p>
    </div>
    <input type="text" @keyup="onKeyupHandler">
</template>

<style>
</style>
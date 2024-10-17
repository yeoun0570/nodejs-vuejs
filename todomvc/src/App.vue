<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },

  data() {
    return {
      todo: [],
      currentData: 'all', //현재 목록 상태를 관리할 수 있도록 정의한 데이터
    };
  },

  methods: {
    addTodo(inputMessage) {
      const item = {
        id : Math.random(),    //각 메시지 관리를 위한 고유번호
        message: inputMessage, //할 일 메시지
        completed : false,     //할일 완료 여부 체크
      };
      this.todo.push(item);
      console.log(`todo배열 : ${this.todo}`);
    },

    updateTab(tab) {
      this.currentData = tab;
    }
  },
};
</script>

<template>
  <div class="todo">
    <!-- 정의한 currentData 데이터를 TodoHeader 컴포넌트에 전달 -->
    <TodoHeader :currentData="currentData" @update-tab="updateTab"> </TodoHeader>

    <TodoList> </TodoList>

    <TodoInput @add-todo="addTodo"> </TodoInput>
  </div>
</template>

<style scoped>
@import "@/assets/todo.css";
</style>

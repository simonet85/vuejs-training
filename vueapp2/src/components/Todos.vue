<template>
  <div class="todos container">
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span :class="{ completed: todo.completed }">
          <input type="checkbox" class="toggle" v-model="todo.completed" />
          {{ todo.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todos",
  data() {
    return {
      todos: [
        {
          text: "My Todo One",
          completed: false
        },
        {
          text: "My Todo Two",
          completed: false
        },
        {
          text: "My Todo Three",
          completed: false
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed {
  text-decoration: line-through;
}
.container {
  margin: auto;
  width: 60%;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px 0;
  border-bottom: 1px #ccc solid;
}
</style>

<template>
  <div>
    <ul class="list-group mb-4">
      <li
        v-for="todo in todos"
        class="list-group-item list-group-item-light"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @click="handleClick(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>

    <router-link class="btn btn-success" to="/add">Add a new todo</router-link>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array,
  },
  methods: {
    handleClick: function(id) {
      this.todos.map(todo => {
        todo.id === id ? (todo.completed = !todo.completed) : todo.completed
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
  },
}
</script>

<style scoped lang="scss"></style>

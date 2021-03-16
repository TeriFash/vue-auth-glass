<template>
  <div class="home">
    <div :class="`${loggedin ? 'container' : ''}`">
      <TodoList :todos="todos" v-if="loggedin" />
      <LoginForm @submit="handleLogin" v-else />
      <div class="row mt-4">
        <button class="btn btn-outline" v-if="loggedin" @click="handleLogout">
          Log out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    TodoList,
    LoginForm,
  },
  data() {
    return {
      loggedin: localStorage.getItem('todoappuser') || false,
      todos: [],
    }
  },
  methods: {
    handleLogout: function() {
      localStorage.removeItem('todoappuser')
      this.loggedin = false
    },
    handleLogin: function() {
      localStorage.setItem('todoappuser', true)
      this.loggedin = true
    },
  },
  mounted: function() {
    if (localStorage.getItem('todoappuser')) {
      this.loggedin = true
      this.todos = JSON.parse(localStorage.getItem('todos')) || []
    }
  },
}
</script>

<style lang="scss">
.home {
  margin: 10% 0;
}
</style>

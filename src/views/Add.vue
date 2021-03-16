<template>
  <div class="container about">
    <h3>Add a new Todo</h3>

    <div class="form-group">
      <label for="description">Your description</label>
      <textarea
        v-model.trim="$v.description.$model"
        placeholder="Todos text"
        rows="5"
        name="description"
        cols="20"
        class="form-control"
        id="description"
        :class="{ 'is-invalid': submitted && $v.description.$error }"
      />
    </div>
    <div class="form-group">
      <button class="btn btn-primary" type="button" @click="handleSubmit()">
        Add todo
      </button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'AddTodo',
  data() {
    return {
      description: '',
      submitted: false,
    }
  },
  validations: {
    description: { required },
  },
  methods: {
    handleSubmit() {
      this.submitted = true

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const currentTodos = JSON.parse(localStorage.getItem('todos')) || []
      const newTodo = {
        id: currentTodos.length + 1,
        text: this.description,
        completed: false,
      }
      localStorage.setItem(
        'todos',
        JSON.stringify(currentTodos.concat(newTodo))
      )
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="scss">
.about {
  margin-top: 10%;
  margin-bottom: 10%;
}
</style>

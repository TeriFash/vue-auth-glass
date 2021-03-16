<template>
  <div class="container">
    <h3>Login here</h3>

    <form method="" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model.trim="$v.username.$model"
          name="username"
          id="username"
          placeholder="Username"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.username.$error }"
        />
        <div v-if="submitted && !$v.username.required" class="invalid-feedback">
          Username is required
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model.trim="$v.password.$model"
          name="password"
          class="form-control"
          placeholder="Password"
          :class="{ 'is-invalid': submitted && $v.password.$error }"
        />
        <div v-if="submitted && !$v.password.required" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary mr-2" :disabled="loading">
          <span
            class="spinner-border spinner-border-sm"
            v-show="loading"
          ></span>
          <span>Login</span>
        </button>

        <router-link class="btn btn-outline" to="/register"
          >Register</router-link
        >
      </div>
      <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import Router from 'vue-router'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: '',
    }
  },
  validations: {
    username: { required },
    password: { required },
  },
  methods: {
    handleSubmit() {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      // this.loading = true;

      this.$emit('submit')
    },
  },
}
</script>

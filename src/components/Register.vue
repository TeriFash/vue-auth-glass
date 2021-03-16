<template>
  <form v-if="toConfirm === true && confirmed === false"></form>

  <div v-else-if="toConfirm === true && confirmed === true"></div>

  <form method="" @submit.prevent="handleSubmit" v-else>
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
      <label for="email">Email address</label>
      <input
        type="text"
        v-model.trim="$v.email.$model"
        name="email"
        id="email"
        placeholder="Email"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.email.$error }"
      />
      <div v-if="submitted && !$v.username.required" class="invalid-feedback">
        Email is required
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
        Register
      </button>
    </div>
    <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      error: '',
      submitted: false,
      loading: false,
      toConfirm: false,
      confirmed: false,
    }
  },
  validations: {
    username: { required },
    password: { required },
    email: { required },
  },
  methods: {
    handleSubmit() {
      this.submitted = true

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      /**
       * Just create a fake user here
       */
      // this.loading = true;

      localStorage.setItem('todoappuser', true)
      this.$router.go('/')
    },
  },
}
</script>

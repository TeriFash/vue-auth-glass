<template>
  <div class="home">
    <div class="container">
      <h3>Register</h3>
      <Register />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    Register,
  },
}
</script>

<template>
  <div class="login">
    <div>
      <p>username:</p>
      <input type="text" v-model="username" />
    </div>
    <div>
      <p>password:</p>
      <input type="password" v-model="password" />
    </div>
    <div class="action">
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      const instance = axios.create({
        baseURL: 'http://localhost:4000',
        timeout: 1000,
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
      })

      const result = await instance.post('login', {
        username: this.username,
        password: this.password,
      })

      console.log(result)
    },
  },
}
</script>

<style scoped>
.action {
  margin-top: 20px;
}
</style>

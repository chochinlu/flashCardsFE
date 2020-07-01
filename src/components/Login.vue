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
    <p class="err-log">{{ errLog }}</p>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errLog: ''
    }
  },
  methods: {
    ...mapActions(['increment']),
    async submit() {
      this.increment()
      console.log(this.$store.state.count)

      const instance = axios.create({
        baseURL: 'http://localhost:4000',
        timeout: 1000,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      })

      try {
        const result = await instance.post('login', {
          username: this.username,
          password: this.password
        })

        this.errLog = ''
        console.log(result.data.token)
        localStorage.setItem('token', result.data.token)
      } catch (e) {
        this.errLog = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.action {
  margin-top: 20px;
}
.err-log {
  color: tomato;
}
</style>

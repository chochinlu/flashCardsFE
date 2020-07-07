<template>
  <div class="login">
    <form form autocomplete="off">
      <div>
        <p>User Name:</p>
        <input
          class="form-input"
          autocomplete="false"
          type="text"
          v-model="username"
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          class="form-input"
          autocomplete="false"
          type="password"
          v-model="password"
        />
      </div>
    </form>
    <div class="action">
      <button @click="submit">Submit</button>
    </div>
    <p class="err-log">{{ errLog }}</p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { login } from '../api'

const oriData = {
  username: '',
  password: '',
  errLog: ''
}

export default {
  name: 'Login',
  data() {
    return { ...oriData }
  },
  methods: {
    ...mapActions(['increment']),
    async submit() {
      this.increment()
      console.log(this.$store.state.count)

      try {
        const result = await login({
          username: this.username,
          password: this.password
        })

        localStorage.setItem('token', result.data.token)

        this.username = ''
        this.password = ''
        this.errLog = ''

        this.$router.push('/')
      } catch (e) {
        this.errLog = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.form-input {
  padding: 5px;
  background-color: burlywood;
  border: none;
  outline: none;
}
.action {
  margin-top: 20px;
}
.err-log {
  color: tomato;
}
</style>

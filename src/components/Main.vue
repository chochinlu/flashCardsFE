<template>
  <div>
    <h1>Main</h1>
    <div class="logout" @click="clearToken">log out</div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    clearToken() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .logout {
    padding: 10px;
    border: 1px solid tomato;
    cursor: pointer;
  }
</style>

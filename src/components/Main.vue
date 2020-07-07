<template>
  <div>
    <h1>Flash Cards</h1>
    <div class="logout" @click="clearToken">Log Out</div>
    <div class="create">Create Card</div>
    <CardList />
  </div>
</template>

<script>
import CardList from './CardList'

export default {
  name: 'Main',
  components: { CardList },
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
  border: 1px solid gray;
  cursor: pointer;
}

.create {
  margin-top: 10px;
  color: cornflowerblue;
  padding: 10px;
  border: 1px solid gray;
  cursor: pointer;
}
</style>

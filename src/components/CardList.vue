<template>
  <div class="cards">
    <div v-for="card of cards" :key="card.id" class="card">
      <div v-if="showQuestion" class="card-question">{{ card.front_question }}</div>
      <div v-else class="card-answer">{{ card.back_answer }}</div>
      <div class="card-familiar">{{ card.familiar ? 'familiar': 'not familiar'  }}</div>
    </div>
  </div>
</template>
<script>
import { getAllCards } from '../api'
export default {
  name: 'CardList',
  async mounted() {
    const result = await getAllCards()
    this.cards = result.data.ok
  },
  data() {
    return {
      cards: '',
      showQuestion: false
    }
  }
}
</script>

<style scoped>
.cards {
  margin-top: 10px;
}
.card {
  margin-bottom: 10px;
  /*padding: 10px;*/
  /*border: 1px solid gray;*/
}

.card-question {
  padding: 10px;
  border: 1px solid #9575cd;
}
.card-answer {
  padding: 10px;
  border: 1px solid #26a69a;
}
</style>

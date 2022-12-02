<script setup>
import { onMounted, reactive } from "vue";
import index from "../helper/MovieHelper";
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";
import axios from "axios";

const state = reactive({ movies: [], show: "", Modaldata: "" });
onMounted(() => {
 if (localStorage.getItem("token") != undefined) {
  let response = index().then((response) => {
   state.movies = response.message;
  });
//   console.log(state.movies);
 } else {
  router.push({ name: "login" });
 }
});
function hideModal() {
 state.show = false;
}
function show(data) {
 state.Modaldata = data;
 state.show = true;
}
</script>

<template>
 <div class="movies">
  <section v-for="item in state.movies" :key="item">
   <Card v-if="item.image" @show="show" :data="item" />
  </section>

  <Modal @hide="hideModal" :data="state.Modaldata" v-if="state.show" />
 </div>
</template>

<style scoped>
.movies {
 display: grid;
 grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
 .movies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
 }
}
</style>

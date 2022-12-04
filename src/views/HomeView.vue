<script setup>
import { onMounted, reactive, computed } from "vue";
import { deleteMovie, getMovies } from "../helper/MovieHelper";
import getCategories from "../helper/CategoryHelper";
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";
import axios from "axios";
import router from "../router";
import NavBar from "../components/Navbar.vue";

const state = reactive({
 movies: [],
 categories: [],
 show: "",
 Modaldata: "",
 selectedCategory: "",
});

const filteredMovies = computed(() => {
 if (state.selectedCategory == "") {
  return state.movies;
 } else {
  return state.movies.filter((movie) => {
   return movie.category_id == state.selectedCategory;
  });
 }
});

onMounted(() => {
 if (localStorage.getItem("token") != undefined) {
  getMovies().then((response) => {
   state.movies = response.data;
  });

  getCategories().then((response) => {
   state.categories = response.data;
  });
 } else {
  router.push({ name: "login" });
 }
});

function hideModal() {
 state.show = false;
}

function show(data) {
 state.Modaldata = {
  ...data,
  categories: state.categories,
  action: data == "create" ? "Create" : "Edit",
 };
 state.show = true;
}

function deleteHandler(id) {
 deleteMovie(id).then((response) => {
  const position = state.movies.findIndex((movie) => movie.id == id);
  state.movies.splice(position, 1);
 });
}

function refatch() {
 getMovies().then((response) => {
  state.movies = response.data;
 });
}

</script>

<template>
 <NavBar @show="show('create')" />
 <section>
  <div class="categories-container">
   <button
    v-if="state.categories?.length > 0"
    class="category-btn"
    @click="state.selectedCategory = ''"
    :class="{ 'active-category': state.selectedCategory == '' }"
   >
    All
   </button>
   <button
    v-for="category in state.categories"
    :key="category.id"
    class="category-btn"
    :class="{ 'active-category': category.id == state.selectedCategory }"
    @click="state.selectedCategory = category.id"
   >
    {{ category.name }}
   </button>
  </div>
 </section>
 <p
  v-if="!state.movies?.length || !state.categories?.length"
  style="color: white; font-size: 20px; text-align: center; margin-top: 20px"
 >
  Loading ...
 </p>
 <div class="movies">
  <section v-for="item in filteredMovies" :key="item">
   <Card v-if="item.image" @show="show" :data="item" @delete="deleteHandler" />
  </section>

  <Modal @hide="hideModal" @refatch="refatch" :data="state.Modaldata" v-if="state.show" />
 </div>
</template>

<style>
body {
 background: url("../assets/bg.jpg") no-repeat center center fixed;
}
.movies {
 display: grid;
 grid-template-columns: 1fr 1fr;
}

@media (min-width: 1024px) {
 .movies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
 }
}

.category-btn {
 background: rgb(89, 89, 89);
 margin: 5px;
 width: 100px;
 display: inline;
}

.categories-container {
 padding: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
}

.active-category {
 background: rgb(185, 104, 104);
}
</style>
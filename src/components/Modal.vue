<script setup>
import { onMounted } from "@vue/runtime-core";
import { reactive } from "vue";
import {update} from "../helper/MovieHelper";
import index from "../helper/CategoryHelper";

const props = defineProps(["data"]);
const state = reactive({
 categories: [],
 name: props.data.name,
 description: props.data.description,
 category: props.data.category_id,
 image: props.data.image,
});

let response = index().then((response) => {
   state.categories = response.message;
});


function updateHandler() {
   let body = {
      name: state.name,
      description: state.description,
      category_id: state.category,
      image: state.image,
   };
   update( body,props.data.id).then((response) => {
      console.log(response);
   });
}
   
</script>
<template>
 <div class="modal">
  <div id="alert" v-if="state.alert">{{ state.alert }}</div>
  <h1 @click="$emit('hide')">X</h1>
  <h1>Edit</h1>
  <form @submit.prevent="updateHandler">
   <label>
    Name:
    <input type="text" v-model="state.name" />
   </label>
   <label>
    Description:
    <input type="text" v-model="state.description" />
   </label>
   <label>
    Image:
    <input type="file" ref="img" name="img"  />

    <!-- <img :src="'https://test-api.storexweb.com/' + state.image" /> -->
   </label>
   <label>
    category:
    <select v-model="state.category">
     <option v-for="cat in state.categories" :value="cat.id" :key="cat.id">
      {{ cat.name }}
     </option>
    </select>
   </label>

   <button type="submit">Edit</button>
  </form>
 </div>
</template>
<style scoped>
.modal {
 position: fixed;
 top: 25%;
 right: 25%;
 width: 50%;
 height: 50%;
 background: white;
}
</style>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { reactive, defineEmits } from "vue";
import { updateMovie, createMovie } from "../helper/MovieHelper";
import index from "../helper/CategoryHelper";

const props = defineProps(["data"]);
const emit = defineEmits(["hide", "refatch"]);
const state = reactive({
 categories: props.data.categories,
 title: props.data.title,
 description: props.data.description,
 category: props.data.category_id,
 image: props.data.image,
 action: props.data.action,
});

function handler() {
 let body = {
  title: state.title,
  description: state.description,
  category_id: state.category,
  image: state.image,
 };
 if (state.action == "Edit")
  updateMovie(body, props.data.id).then((response) => {
   // console.log(response);
   emit("hide");
   emit("refatch");
  });
 else
  createMovie(body).then((response) => {
   emit("hide");
   emit("refatch");
  });
}
</script>
<template>
 <div class="modal">
  <div id="alert" v-if="state.alert">{{ state.alert }}</div>
  <form @submit.prevent="handler">
   <section class="modal-header">
    <h1>{{ state.action }}</h1>
    <span @click="$emit('hide')">X</span>
   </section>
   <label>
    Name:
    <input type="text" v-model="state.title" required />
   </label>
   <label>
    Description:
    <textarea v-model="state.description" rows="6" required />
   </label>
   <label>
    Category:
    <select v-model="state.category" required>
     <option v-for="cat in state.categories" :value="cat.id" :key="cat.id">
      {{ cat.name }}
     </option>
    </select>
   </label>
   <label>
    Image:
    <input type="file" ref="img" name="img" />
   </label>

   <button type="submit">{{ state.action }}</button>
  </form>
 </div>
</template>
<style scoped>
span {
 font-size: 20px;
 cursor: pointer;
 font-weight: bold;
}
.modal {
 position: fixed;
 display: flex;
 justify-content: center;
 align-items: center;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 border-radius: 10px;
 z-index: 100;
}

form {
 width: 550px;
}

textarea {
 resize: none;
}

h1 {
 font-size: 1.75rem;
 line-height: 30px;
}
.modal::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.5);
 z-index: -1;
}

img {
 width: 150px;
 height: 200px;
 border-radius: 5px;
}

.modal-header {
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
}

select {
 width: 100%;
 padding: 5px;
 border-radius: 5px;
 background: white;
 border: 1px solid #ccc;
 outline: none;
}

select option {
 font-size: 15px;
}

button {
 margin-top: 20px;
 font-weight: bold;
 font-size: 18px;
 width: 100%;
 background: #00f;
}
</style>

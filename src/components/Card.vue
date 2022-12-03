<script setup>
import { reactive } from "vue";
import router from "../router";

const props = defineProps(["data"]);

let state = reactive({
 alert: "",
});
</script>

<template>
 <div class="card">
  <img :src="props.data.image" />
  <h3>{{ props.data.title }}</h3>
  <p>{{ props.data.description }}</p>
  <div class="actions-container">
   <button class="edit-btn" @click="$emit('show', props.data)">Edit</button>
   <button class="delete-btn" @click="$emit('delete', props.data.id)">
    Delete
   </button>
  </div>
 </div>
</template>

<style scoped>
img {
 width: 100%;
 height: 500px;
}

h3 {
 text-align: center;
 font-weight: bold;
}

.card {
 background: rgb(207, 205, 205);
 border-radius: 16px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
 padding: 1rem;
}

.edit-btn {
 background: #2e60cc;
}

.delete-btn {
 background: #e74c3c;
}

img {
 border-radius: 10px;
}

.actions-container {
 margin-top: 10px;
 display: grid;
 gap: 5px;
 grid-template-columns: 1fr 1fr;
}
</style>
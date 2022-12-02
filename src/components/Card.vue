<script setup>
import { destory } from '../helper/MovieHelper';
import { reactive } from 'vue';
import router from '../router';


const props = defineProps(["data"]);

let state = reactive({
    alert: "",
});

function deleteHandler() {
   destory(props.data.id).then((response) => {
      console.log(response.status);
      if (response.status == 'success') {
         router.push({ name: "home" });
      }
      else {
         state.alert = response.response.data.message;
         console.log(state.alert);
      }
   });
   
}
</script>


<template>
  <div class="card">
    <img :src="'https://test-api.storexweb.com/' + props.data.image" />
    <h1>{{ props.data.name }}</h1>
    <h3>{{ props.data.description }}</h3>
    <div>
      <button @click="$emit('show', props.data)">Edit</button>
      <button @click="deleteHandler">Delete</button>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 300px;
}
</style>

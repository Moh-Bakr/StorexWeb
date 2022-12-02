<script setup>
import { destory } from '../helper/CrudHelper';
import { reactive } from 'vue';
import router from '../router';


const props = defineProps(["data"]);

let state = reactive({
    alert: "",
});

function deleteHandler() {
   // props.data.id
   destory(5).then((response) => {
      if (response.response.data.status == 'success') {
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

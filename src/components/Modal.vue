<script setup>
import { onMounted } from "@vue/runtime-core";
import { reactive } from "vue";

const state = reactive({
  categories: [
    {
      id: 86,
      name: "Action",
      created_at: "2022-07-31T04:39:51.000000Z",
      updated_at: "2022-07-31T04:39:51.000000Z",
    },
    {
      id: 87,
      name: "Comedy",
      created_at: "2022-07-31T04:40:37.000000Z",
      updated_at: "2022-07-31T04:40:37.000000Z",
    },
    {
      id: 88,
      name: "Drama",
      created_at: "2022-07-31T04:40:57.000000Z",
      updated_at: "2022-09-24T23:11:47.000000Z",
    },
    {
      id: 89,
      name: "Horror",
      created_at: "2022-07-31T04:41:07.000000Z",
      updated_at: "2022-07-31T04:41:07.000000Z",
    },
    {
      id: 90,
      name: "Fantazia",
      created_at: "2022-07-31T04:41:21.000000Z",
      updated_at: "2022-07-31T04:41:21.000000Z",
    },
    {
      id: 91,
      name: "Romantic",
      created_at: "2022-07-31T04:41:45.000000Z",
      updated_at: "2022-07-31T04:41:45.000000Z",
    },
  ],
});

</script>
<template>
  <div class="modal">
    <div id="alert" v-if="state.alert">{{ state.alert }}</div>
    <h1 @click="$emit('hide')">X</h1>
    <h1>Edit</h1>
    <form @submit.prevent="loginWithPassword">
      <label>
        Name:
        <input type="text" v-model="state.emailOrUsername" />
      </label>
      <label>
        Description:
        <input type="password" v-model="state.password" />
      </label>
      <label>
        Image:
        <input type="file" ref="img" name="img" />
      </label>
      <label>
        category:
        <select>
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

<script setup>
import register from "../helper/AuthHelper";
import { reactive, onMounted } from "vue";
import router from "../router";

const state = reactive({
 name: "",
 email: "",
 password: "",
 error: "",
 alert: "",
});

onMounted(() => {
 if (localStorage.getItem("token") != undefined) {
  router.push({ name: "home" });
 }
});

async function registerHandler() {
 let body = {
  name: state.name,
  email: state.email,
  password: state.password,
 };
 state.alert = "";
 let response = await register(body);
 if (response.status == "success") {
  router.push({ name: "login" });
 } else {
  state.alert = "Email already exists";
 }
}
</script>

<template>
 <div class="form-container">
  <form @submit.prevent="registerHandler">
   <h1>Register</h1>
   <div class="form-control">
    <label class="label" for="name">Name</label>
    <input type="name" id="name" v-model="state.name" required />
   </div>
   <div class="form-control">
    <label class="label" for="email">Email</label>
    <input type="email" id="email" v-model="state.email" required />
   </div>
   <div class="form-control">
    <label class="label" for="password">Password</label>
    <input type="password" id="password" v-model="state.password" required />
   </div>
   <input type="submit" value="Register" class="btn" />
   <div class="link">
    <p>Already have an account? <RouterLink to="/login">Login</RouterLink></p>
   </div>
   <p class="error" v-if="state.alert">{{ state.alert }}</p>
  </form>
 </div>
</template>

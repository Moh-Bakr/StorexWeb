<script setup>
import { login } from "../helper/AuthHelper";
import { reactive } from "vue";
import router from "../router";

const state = reactive({
 email: "",
 password: "",
 error: "",
});

async function LoginHandler() {
 let body = {
  email: state.email,
  password: state.password,
 };
 let response = await login(body);
 response = JSON.parse(response);

 if (response.status == "success") {
  localStorage.setItem("token", "Bearer " + " " + response.authorisation.token);
  router.push({ name: "home" });
 } else {
  state.error = response.message;
  console.log(state.error);
 }
}
</script>

<template>
 <h1>Login</h1>
 <form @submit.prevent="LoginHandler">
  <div class="form-control">
   <label class="label" for="email">Email</label>
   <input type="email" id="email" v-model="state.email" />
  </div>
  <div class="form-control">
   <label class="label" for="password">Password</label>
   <input type="password" id="password" v-model="state.password" />
  </div>
  <input type="submit" value="Login" class="btn" />
 </form>
</template>


<style scoped>
.center {
 text-align: center;
}
.form-control {
 margin: 1rem 0;
}
.label {
 display: block;
}
</style>
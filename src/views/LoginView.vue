<script setup>
import { login } from "../helper/AuthHelper";
import { reactive, onMounted } from "vue";
import router from "../router";

const state = reactive({
 email: "",
 password: "",
 error: "",
});

onMounted(()=>{
   if(localStorage.getItem("token") != undefined){
   router.push({name: "home"})
   }
})

async function loginHandler() {
 let body = {
  email: state.email,
  password: state.password,
 };
 let response = await login(body);
 response = JSON.parse(response);

 if (response.status == "success") {
  localStorage.setItem("token", "Bearer " + " " + response.authorization.token);
  router.push({ name: "home" });
 } else {
  state.error = response.message;
  console.log(state.error);
 }
}
</script>

<template>
 <div class="form-container">
  <form @submit.prevent="loginHandler">
   <h1>Login</h1>
   <div class="form-control">
    <label class="label" for="email">Email</label>
    <input type="email" id="email" v-model="state.email" />
   </div>
   <div class="form-control">
    <label class="label" for="password">Password</label>
    <input type="password" id="password" v-model="state.password" />
   </div>
   <input type="submit" value="Login" class="btn" />
   <div class="link">
      <p>Don't have an account? <RouterLink to="/register">Register</RouterLink></p>
   </div>
  </form>
 </div>
</template>

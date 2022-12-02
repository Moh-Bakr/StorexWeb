<script setup>
import register from "../helper/AuthHelper";
import { reactive } from "vue";
import router from "../router";

const state = reactive({
 name: "",
 email: "",
 password: "",
 error: "",
});

async function RegisterHandler() {
 let body = {
  name: state.name,
  email: state.email,
  password: state.password,
 };
   let response = await register(body);
   response = JSON.parse(response);
   if (response.status == "success") {
      router.push({ name: 'home' })
      
   } else {
      state.error = response.message;
      console.log(state.error);
      }
}
</script>

<template>
 <h1>Register</h1>
 <form @submit.prevent="RegisterHandler">
  <div class="form-control">
   <label class="label" for="name">Name</label>
   <input type="name" id="name" v-model="state.name" />
  </div>
  <div class="form-control">
   <label class="label" for="email">Email</label>
   <input type="email" id="email" v-model="state.email" />
  </div>
  <div class="form-control">
   <label class="label" for="password">Password</label>
   <input type="password" id="password" v-model="state.password" />
  </div>
  <input type="submit" value="Register" class="btn" />
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
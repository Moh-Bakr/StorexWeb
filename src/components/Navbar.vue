<script setup>
import { destory } from "../helper/MovieHelper";
import { reactive } from "vue";
import router from "../router";

const props = defineProps(["data"]);

let state = reactive({
 alert: "",
});
</script>

<template>
 <div class="navbar">
  <h2 class="logo">Storexweb</h2>
  <button @click="$emit('show')" class="create">Create</button>
  <button class="logout">Logout</button>
 </div>
</template>

<style scoped>
.navbar {
 display: flex;
 position: sticky;
 justify-content: space-between;
 align-items: center;
 padding: 1rem;
 background: transparent;
 backdrop-filter: blur(2px);
 box-shadow: inset 0px 0px 60px rgba(248, 248, 248, 0.2);
 width: 100%;
}

.logo {
 width: 100px;
 color: white;
}

.nav-links {
 display: flex;
}

a {
 color: white;
 margin: 0 0.5rem;
 text-decoration: none;
}

.create {
 background: #2e60cc;
 padding: 0.2rem 0.75rem;
 border-radius: 5px;
 font-size: 1.3rem;
}

.create::before {
 content: "+";
 margin-right: 0.5rem;
 font-size: 1.5rem;
}

.logout {
 background: #b81313;
 padding: 0.2rem 1rem;
 border-radius: 5px;
 font-size: 1.4rem;
}

img {
 width: 50px;
 height: 50px;
 border-radius: 10px;
}
</style>
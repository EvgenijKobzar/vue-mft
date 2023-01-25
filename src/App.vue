<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/user/10">User</router-link> |
		<router-link to="/task/start/add/12/0">Page.add</router-link> |
		<router-link to="/task/start/10/upd/5">Page.upd</router-link> |
		<router-link to="/task/list">List</router-link>
		<!--		<router-link to="/task/list">taskList</router-link> |-->
		<!--		<router-link to="/task/start/10/add">taskStartAdd</router-link>-->
	</div>
	<router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

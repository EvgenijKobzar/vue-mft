<script setup>
import router from '../router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

function get()
{
	router.push({ path: '/check/get', query: {id: 16} });
}
function add()
{
	router.push({ path: '/fuel/add' });
}
</script>

<template>
	<h1>The user is {{ $route.params.presetCode }} - list</h1>
	<font-awesome-icon icon="fa-solid fa-plus" @click="add">fuel add</font-awesome-icon>
</template>
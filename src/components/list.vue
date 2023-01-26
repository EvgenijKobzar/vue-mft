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
	<h1>List</h1>
	<ul>
		<li>get|upd</li>
		<li @click="get">get check - 16</li>
		<li>get|upd</li>
	</ul>
	<font-awesome-icon icon="fa-solid fa-plus" @click="add">fuel add</font-awesome-icon>
</template>
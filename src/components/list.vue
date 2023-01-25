<script setup>
import router from '../router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

function get()
{
	router.push({ path: '/task/10/get' });
}
function add()
{
	router.push({ path: '/task/12/add' });
}
</script>

<template>
	<h1>List</h1>
	<ul>
		<li>get|upd</li>
		<li @click="get">get|upd</li>
		<li>get|upd</li>
	</ul>
	<font-awesome-icon icon="fa-solid fa-plus" @click="add"/>
</template>
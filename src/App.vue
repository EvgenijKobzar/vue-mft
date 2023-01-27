<script setup>
import { ref, onMounted } from 'vue'
import ReportCollection from "./lib/collection/report-collection.js";

const collection = new ReportCollection();

const el = ref()

onMounted(() => {
	return new Promise((resolve, reject) => {
		collection.refreshByFilter()
		.then(() => {
			console.log('count', collection.count());
			console.log('preset-2', collection.getFieldsById(2));
			resolve();
		});
	})
})
</script>


<template>
	<div id="nav">
		{{el}}
		<router-link to="/task/12/add">Page.add</router-link> |
		<router-link to="/task/10/upd">Page.upd</router-link> |
		<router-link to="/task/list">List</router-link>
	</div>
	<router-view />
</template>
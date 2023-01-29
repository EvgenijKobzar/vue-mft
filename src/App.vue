<script setup>
// import { ref, onMounted, computed } from 'vue'
// import ReportCollection from "./lib/collection/report-collection.js";

// const items = ref([]);
// const types = ref([
// 	'add',
// 	'upd',
// 	'get',
// 	'list'
// ]);
// const collection = new ReportCollection();

// onMounted(() => {
// 	return new Promise((resolve, reject) => {
// 		collection.refreshByFilter({active: 'Y'})
// 			.then(() => {
//
// 				const list = [];
// 					for (let model of collection.getModels())
// 					{
// 						list.push(model.getField('code'))
// 					}
//
// 				items.value = list
//
// 				resolve();
// 			});
// 	})
// })

// function makeUrl(item, type)
// {
// 	return '/' + item + '/' + type;
// }

</script>


<template>
<!--	<div id="nav">-->
<!--		<div v-for="(item, i) in items">-->
<!--			<router-link :to="makeUrl(item, type)" v-for="(type, i) in types" > {{item}} {{type}} | </router-link> |-->
<!--		</div>-->
<!--	</div>-->
	<router-view />
	<router-view name="navbar" />
</template>
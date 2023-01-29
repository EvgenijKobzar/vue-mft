<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute();
const router = useRouter();
const items = ref(route.matched.slice(-1)[0]?.meta?.relation);
// console.log('route', route.)
watch(route, () => {
	items.value = route.matched.slice(-1)[0]?.meta?.relation;
	// console.log('items', items)
})


// function get()
// {
// 	router.push({ path: '/check/get', query: {id: 16} });
// }
// function add()
// {
// 	router.push({ path: '/fuel/add' });
// }
</script>

<template>
	<h1>List</h1>
	<div v-for="(item, i) in items">
		item - {{ i }}
		<div v-for="item in items">
			<router-link :to="item.path" > {{item.path}} | </router-link>
		</div>
	</div>
</template>
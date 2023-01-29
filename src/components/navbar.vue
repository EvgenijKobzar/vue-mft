<template>
		<font-awesome-icon icon="fa-solid fa-circle-plus" size="5x" :style="{ color: '#0D6EFCFF' }" @click="add">fuel add</font-awesome-icon>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {useRouter} from "vue-router";
const router = useRouter();

function add()
{
	router.push({ path: 'add' });
}
</script>

<style scoped>

</style>
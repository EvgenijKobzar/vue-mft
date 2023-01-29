<template>
	<h1 @click="list"> add </h1>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter();

function list()
{
	router.push({ path: 'list' });
}
</script>

<style scoped>

</style>
<script setup>
import router from '../router'

// console.log('router', router);
</script>

<template>
	<h1>The user is {{ $route.params.presetId }} - {{ $route.params.action }}</h1>
</template>
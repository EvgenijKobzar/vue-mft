<script setup>
import {ref, onMounted, computed, reactive} from 'vue'
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
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale
} from 'chart.js'
import { Bar, Line } from 'vue-chartjs'
import Rest from "./lib/provider/rest.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const state = reactive({
	status: 'wait',
	type: 'line',
	data: {
		labels: [],
		datasets: [
			{
				label: 'Расход л/100км',
				backgroundColor: '#77b7cd',
				data: []
			}
		],
	},
	options: {
		responsive: true,
		aspectRatio: 1,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				labels: {
					color: 'rgb(255, 99, 132)'
				}
			}
		}
	},
	data1: {
		labels: [],
		datasets: [
			{
				label: 'Расход л/моточас',
				backgroundColor: '#77b7cd',
				data: []
			}
		],
	},
	options1: {
		responsive: true,
		aspectRatio: 1,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				labels: {
					color: 'rgb(255, 99, 132)'
				}
			}
		}
	}
})

const labels = []
const datasets = []
const labels1 = []
const datasets1 = []

onMounted(()=> {
	return new Promise((resolve, reject) =>
	{
		(new Rest({cmd: 'mft.transportation.list'}))
		.then((response) =>
		{
			response.data.result.forEach((item, index) =>
			{
				if (item['status'] === 'completed')
				{
					labels.push(item['dateTo']);
					labels1.push(item['dateTo']);
					datasets.push(parseFloat(item['vehicleFuelConsumption']));
					datasets1.push(parseFloat(item['trailerFuelConsumption']));
				}
			})

			state.data.labels = labels;
			state.data1.labels = labels1;
			state.data.datasets[0].data = datasets
			state.data1.datasets[0].data = datasets1

			console.log('state', state)
			state.status = 'none';
			resolve();
		})
	})
})




</script>


<template>
<!--	<div id="nav">-->
<!--		<div v-for="(item, i) in items">-->
<!--			<router-link :to="makeUrl(item, type)" v-for="(type, i) in types" > {{item}} {{type}} | </router-link> |-->
<!--		</div>-->
<!--	</div>-->

<!--	<div class="chart-container" style="position: relative; height:40vh; width:80vw" ><Bar :data="state.data" :options="state.options" v-if="state.status === 'none'"/></div>-->
<!--	<div class="chart-container" style="position: relative; height:40vh; width:80vw"><Bar :data="state.data1" :options="state.options1" v-if="state.status === 'none'"/></div>-->

	<div><Bar :data="state.data" :options="state.options" v-if="state.status === 'none'"/></div>
	<div><Bar :data="state.data1" :options="state.options1" v-if="state.status === 'none'"/></div>

	<router-view />
	<router-view name="navbar" />
</template>
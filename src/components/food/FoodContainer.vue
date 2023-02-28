<script setup>
import { ref, onBeforeMount, watchEffect } from 'vue'
import axiosConfig from '../../config/axios.config.js'
import FoodSearch from './partials/FoodSearch.vue'
import FoodCardWrapper from './partials/FoodCardWrapper.vue'

const foods = ref([])

const getFoods = async () => {
	await axiosConfig
		.get('/food')
		.then((response) => {
			foods.value = response.data
		})
		.catch((error) => {
			console.log(error)
		})
}

onBeforeMount(() => {
	getFoods()
})

const onSearch = (e) => {
	const search = e.target.value
	const filteredFoods = foods.value.filter((food) => {
		return food.name.toLowerCase().includes(search.toLowerCase())
	})
	foods.value = filteredFoods

	if (search === '') {
		getFoods()
	}
}

</script>

<template>
	<div
		class="flex min-h-screen w-full flex-col flex-wrap items-center justify-center gap-4 bg-gray-100"
	>
		<!-- search food -->
		<FoodSearch v-on:onChange="onSearch" />
		<FoodCardWrapper :foods="foods" />
	</div>
</template>

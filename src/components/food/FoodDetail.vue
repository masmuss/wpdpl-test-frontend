<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import axiosConfig from '../../config/axios.config.js'

const id = window.location.pathname.split('/')[2]

const food = ref({
	name: '',
	description: '',
	image: '',
	price: '',
	ingredients: '',
})

const getFood = async () => {
	await axiosConfig
		.get(`/food/${id}`)
		.then((response) => {
			food.value = response.data
		})
		.catch((error) => {
			console.log(error)
		})
}

onMounted(() => {
	getFood()
})
</script>

<template>
	<div class="flex h-screen w-full flex-col items-center justify-center">
		<div class="w-1/6 rounded-md bg-white p-4">
			<div class="aspect-video w-full rounded-sm">
				<img :src="food.image" :alt="food.name" class="object-cover" />
			</div>
			<div class="mt-4">
				<h3 class="text-2xl font-bold">{{ food.name }}</h3>
				<p class="text-lg font-semibold">{{ food.price }}</p>
				<p class="text-gray-700">{{ food.description }}</p>
                <p class="text-gray-700">{{ food.ingredients }}</p>
			</div>
		</div>
	</div>
</template>

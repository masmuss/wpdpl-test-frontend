<script setup>
import { RouterLink } from 'vue-router'
defineProps({
	food: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<router-link 
	:to = "{ name: 'food-detail', params: { id: food.id } }" 
	class="w-1/6 rounded-md bg-white p-4">
		<div class="aspect-video w-full rounded-sm">
			<img :src="food.image" :alt="food.name" class="object-cover" />
		</div>
		<div class="mt-4">
			<h3 class="text-2xl font-bold">{{ food.name }}</h3>
			<p class="text-lg font-semibold">{{ food.price }}</p>
			<p class="text-gray-700">{{ food.description }}</p>
		</div>
	</router-link>
</template>

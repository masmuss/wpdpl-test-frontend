<script setup>
import FoodCard from './FoodCard.vue'

defineProps({
	foods: {
		type: Array,
		required: true,
	},
})
</script>
<template>
	<div class="flex w-full flex-row flex-wrap items-start justify-center gap-4">
		<FoodCard v-for="food in foods" :food="food" :key="food.id" />
	</div>
</template>

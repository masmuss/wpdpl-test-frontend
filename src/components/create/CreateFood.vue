<script setup>
import { ref, onBeforeMount } from 'vue'
import axiosConfig from '../../config/axios.config.js'

const food = ref({
	name: '',
	description: '',
	image: '',
	price: '',
	ingredients: '',
})

const onImageChange = (e) => {
	const file = e.target.files[0]
	const reader = new FileReader()
	reader.onload = (e) => {
		food.value.image = e.target.result
	}
	reader.readAsDataURL(file)
}

const onSubmit = async (e) => {
	e.preventDefault()
	const { data } = await axiosConfig.post('/food', food.value)
	console.log(data)
}
</script>

<template>
	<form
		class="flex h-screen w-full flex-col items-center justify-center"
		:onsubmit="onSubmit"
	>
		<div class="flex flex-col">
			<label for="name">Name</label>
			<input
				type="text"
				id="name"
				v-model="food.name"
				class="border-gray-500 p-3"
			/>
		</div>
		<div class="flex flex-col">
			<label for="description">Description</label>
			<input
				type="text"
				id="description"
				v-model="food.description"
				class="border-gray-500 p-3"
			/>
		</div>
		<div class="flex flex-col">
			<label for="image">Image</label>
			<input type="file" id="image" :on-change="onImageChange" />
		</div>
		<div class="flex flex-col">
			<label for="price">Price</label>
			<input
				type="text"
				id="price"
				v-model="food.price"
				class="border-gray-500 p-3"
			/>
		</div>
		<div class="flex flex-col">
			<label for="ingredients">Ingredients</label>
			<input
				type="text"
				id="ingredients"
				v-model="food.ingredients"
				class="border-gray-500 p-3"
			/>
		</div>
		<button type="submit">Submit</button>
	</form>
</template>

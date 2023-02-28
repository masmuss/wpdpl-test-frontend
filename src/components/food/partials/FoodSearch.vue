<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const search = ref('')

defineEmits(['onChange'])
</script>

<template>
	<div class="flex flex-col items-center justify-center gap-6">
		<h1 class="text-4xl font-bold">Food Search</h1>
		<div class="space-x-4">
			<input
				type="search"
				placeholder="Mau cari apa?"
				class="rounded-md px-5 py-2.5 active:ring-0"
				:value="search"
				@input="search = $event.target.value"
				@change="$emit('onChange', $event)"
			/>
			<button
				type="button"
				class="rounded-md bg-blue-500 px-5 py-2.5 text-white"
			>
				search!
			</button>
		</div>
	</div>
</template>

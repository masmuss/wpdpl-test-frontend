import { createRouter, createWebHistory } from 'vue-router'
import FoodContainer from '../components/food/FoodContainer.vue'
import FoodDetail from '../components/food/FoodDetail.vue'
import CreateFood from '../components/create/CreateFood.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: FoodContainer,
	},
	{
		path: '/food/:id',
		name: 'food-detail',
		component: FoodDetail,
	},
	{
		path: '/create',
		name: 'create',
		component: CreateFood,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

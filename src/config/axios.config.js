import axios from 'axios'

const axiosConfig = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1',
	timeout: 1000,
	cache: {
		maxAge: 5 * 60 * 1000,
	},
})

export default axiosConfig

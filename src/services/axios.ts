// axiosInstance.js or api.js
import axios from 'axios';

const getCookie = (name: string) => {
	if (typeof document === 'undefined') {
		// Server-side, cannot access cookies
		return null;
	}
	try {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${encodeURIComponent(name)}=`) as Array<string>;
		if (parts.length === 2) {
			let element = parts.pop() ?? '';
			if (!element) {
				return null;
			}

			if (!';'.includes(element)) {
				return null;
			}

			let cookieValue = element.split(';');

			if (cookieValue.length === 0) {
				return null;
			}

			let res = cookieValue.shift() ?? '';

			if (res.length === 0) {
				return null;
			}

			return decodeURIComponent(res);
		}
	} catch (e) {
		console.error('Error parsing cookie:', e);
	}
	return null;
};

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
});
axiosInstance.interceptors.request.use(
	(config) => {
		// You can modify the request here, for example, add authorization tokens
		const token = getCookie('access_token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		// Handle the response, if needed
		return response;
	},
	(error) => {
		if (error.response) {
			switch (error.response.status) {
				case 401:
					// Handle unauthorized error
					window.location.href = '/login';
					break;
				case 404:
					console.log('Resource not found');
					break;
				case 500:
					console.log('Server error');
					break;
				default:
					console.log('An error occurred');
			}
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;

import type { PageServerLoad } from './$types';

import axiosInstance from '../services/axios';
import useRoutes from '../hooks/routes';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
	try {
		const routes = useRoutes();
		const url = routes.getURL('VIDEOS_URL');
		const response = await axiosInstance.get(url);

		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		return {
			error: true,
			message: error
		};
	}
};

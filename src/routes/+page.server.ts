import type { PageServerLoad } from './$types';
import { queryClient } from '../services/queryClient';
import { dehydrate } from '@tanstack/query-core';
import axiosInstance from '../services/axios';
import useRoutes from '../hooks/routes';
import type Video from '../types/video.type';

export const load: PageServerLoad = async () => {
	const queryKey = ['videos', 5];

	const getVideoData = async () => {
		const routes = useRoutes();
		const url = routes.URLs.VIDEO_URL();
		const response = await axiosInstance.get(url);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Error: ${response.statusText}`);
		}
	};

	// Prefetch the data
	await queryClient.prefetchQuery<Video[]>({
		queryKey: queryKey,
		queryFn: async () => await getVideoData()
	});

	// Dehydrate the query cache
	const dehydratedState = dehydrate(queryClient);

	return {
		dehydratedState
	};
};

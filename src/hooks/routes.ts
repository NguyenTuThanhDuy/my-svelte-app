function useRoutes() {
	const baseUrl = import.meta.env.VITE_API_URL;

	// Define URLs as a const object to ensure type safety
	const URLs = {
		LOGIN_URL: () => baseUrl + '/login',
		SIGNUP_URL: () => baseUrl + '/signup',
		VIDEOS_URL: () => baseUrl + '/videos'
	};

	// Type of the keys of URLs
	type URLKeys = keyof typeof URLs;

	// Function to get URL
	const getURL = (url: URLKeys): string => {
		return URLs[url]();
	};

	return {
		getURL
	};
}

export default useRoutes;

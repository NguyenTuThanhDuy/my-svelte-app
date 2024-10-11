<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Login from 'svelte-material-icons/Login.svelte';

	import axiosInstance from '../../services/axios';
	import useRoutes from '../../hooks/routes';
	import { userInfo } from '../../stores/userInfoStore';
	import { AxiosError } from 'axios';
	import type { UserInfo } from '../../types/user.type';

	onMount(() => {
		let user = sessionStorage.getItem('user');
		if (user) {
			const userObject = JSON.parse(user) as UserInfo;
			if (Object.values(userObject).every((value) => value !== undefined || value !== null)) {
				goto('/', { replaceState: true });
			}
		}
	});

	const routes = useRoutes();
	const url = routes.URLs.LOGIN_URL();
	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		try {
			let data = {
				username: formData.get('email'),
				password: formData.get('password')
			};
			const response = await axiosInstance.post(url, data);
			userInfo.update(() => response.data);
			goto('/', { replaceState: true });
		} catch (error: unknown) {
			// Ensure the error is an AxiosError type
			if (error && (error as AxiosError).isAxiosError) {
				const axiosError = error as AxiosError;
				console.error('Error Code: ', axiosError.status);
				console.error('Axios Error: ', axiosError.message);
			} else {
				console.error('Unknown Error: ', error);
			}
		}
	};
</script>

<section class="">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<a href="/" class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
			<Login />
			Login
		</a>
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Sign in to your account
				</h1>
				<form
					class="space-y-4 md:space-y-6"
					action="#"
					name="loginForm"
					on:submit|preventDefault={handleSubmit}
				>
					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Your email</label
						>
						<input
							type="email"
							name="email"
							id="email"
							class="focus:border-primary-600 focus:ring-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							placeholder="name@company.com"
							required={true}
						/>
					</div>
					<div>
						<label
							for="password"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label
						>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							class="focus:border-primary-600 focus:ring-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							required={true}
						/>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-start">
							<div class="flex h-5 items-center">
								<input
									id="remember"
									aria-describedby="remember"
									type="checkbox"
									class="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
									required={false}
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
							</div>
						</div>
						<a href="/forget" class="text-sm font-medium underline hover:text-lg"
							>Forgot password?</a
						>
					</div>
					<div class="flex justify-center">
						<button type="submit" class="variant-filled btn">Sign in </button>
					</div>

					<p class="text-sm font-light">
						Don’t have an account yet? <a href="/signup" class="font-medium underline hover:text-lg"
							>Sign up</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import Login from 'svelte-material-icons/Login.svelte';
	import axiosInstance from '../../services/axios';
	import useRoutes from '../../hooks/routes';

	const routes = useRoutes();
	const url = routes.URLs.SIGNUP_URL();

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		try {
			let data = {
				username: formData.get('email'),
				password: formData.get('password'),
				confirmPassword: formData.get('confirmPassword'),
				isAccepted: formData.get('userAcceptance')
			};
			console.log(data);
			const response = await axiosInstance.post(url, data);
			window.alert('Signup successfully');
		} catch {
			console.error('Error');
			window.alert('Failed to signup');
		}
	};
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<a href="/" class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
			<Login />
			SignUp
		</a>
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Sign up your account
				</h1>
				<form
					class="space-y-4 md:space-y-6"
					action="#"
					name="signUpForm"
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
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							required={true}
						/>
					</div>
					<div>
						<label
							for="confirmPassword"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Confirm Password</label
						>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							placeholder="••••••••"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							required={true}
						/>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-start">
							<div class="flex h-5 items-center">
								<input
									id="userAcceptance"
									name="userAcceptance"
									aria-describedby="userAcceptance"
									type="checkbox"
									class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
									required={true}
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="userAcceptance" class="text-gray-500 dark:text-gray-300"
									>I accept the Terms and Conditions</label
								>
							</div>
						</div>
					</div>
					<button
						type="submit"
						class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Sign up</button
					>
					<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
						Already have an account? <a
							href="/login"
							class="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>Login here</a
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<template>
	<div class="container flex mx-auto">
			<div class="w-1/4 mt-3 p-5 text-center">
				<img src="/img/me.jpg" alt="me" class="w-48 h-48 rounded-full border-4 border-indigo-900 object-cover mx-auto">
				<h1 class="text-2xl font-semibold uppercase my-5">Oğuz Tokatlı</h1>
				<hr class="h-px shadow-md border-none bg-indigo-900">
				<p class="font-light mt-5">Full Stack Web Developer</p>
			</div>
			<div class="flex-1">
				<nav class="mt-56">
					<ul class="flex justify-center font-medium">
						<li class="mr-8 p-5"><router-link class="block pb-1 hover:border-b hover:border-gray-100" to="/">Biography</router-link></li>
						<li class="mr-8 p-5"><router-link class="block pb-1 hover:border-b hover:border-gray-100" to="/skills">Skills</router-link></li>
						<li class="mr-8 p-5"><router-link class="block pb-1 hover:border-b hover:border-gray-100" to="/experiences">Experiences</router-link></li>
						<li class="mr-8 p-5"><router-link class="block pb-1 hover:border-b hover:border-gray-100" to="/projects">Projects</router-link></li>
						<li class="p-5"><router-link class="block pb-1" to="/languages">Languages</router-link></li>
					</ul>
				</nav>
				<main class="mt-24 flex justify-center">
					<router-view></router-view>
				</main>
			</div>	
	</div>
</template>
<script>
	export default{}
</script>
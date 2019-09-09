import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Experiences from './components/Experiences.vue';
import Projects from './components/Projects.vue';
import Languages from './components/Languages.vue';

export default {
	mode: 'history',
	routes: [

		{
			path: '/',
			component: Home
		},
		{
			path: '/skills',
			component: Skills
		},
		{
			path: '/experiences',
			component: Experiences
		},
		{
			path: '/projects',
			component: Projects
		},
		{
			path: '/languages',
			component: Languages
		},

	]
};
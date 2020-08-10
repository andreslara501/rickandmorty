import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CharacterOnly from '@/components/CharacterOnly'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/personaje/:characterId',
			name: 'CharacterOnly',
			component: CharacterOnly
		}
	]
})

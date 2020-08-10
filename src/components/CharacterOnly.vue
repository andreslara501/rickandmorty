<template>
	<div style="width: 500px;">
		<el-card :body-style="{ padding: '0px' }">
			<img :src="character.image" class="image">
			<div style="padding: 14px;">
				<h1>{{character.name}}</h1>
				<div>
					<strong>Estado:</strong>
					<span v-if="character.status == 'Alive'">Vivo</span>
					<span v-if="character.status == 'Dead'">Muerto</span>
					<span v-if="character.status == 'Unknown'">Desconocido</span>
				</div>

				<div>
					<strong>Especie:</strong>
					<span>{{character.species}}</span>
				</div>

				<div>
					<strong>Género:</strong>
					<span v-if="character.gender == 'Female'">Vivo</span>
					<span v-if="character.gender == 'Male'">Muerto</span>
					<span v-if="character.gender == 'Genderless'">Sin género</span>
					<span v-if="character.gender == 'Unknown'">Desconocido</span>
				</div>

				<div>
					<strong>Origen:</strong>
					<span>{{character.origin.name}}</span>
				</div>

				<div>
					<strong>Ubicación:</strong>
					<span>{{character.location.name}}</span>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
import axios from "axios";

import {
  Select,
  Button
  // ...
} from 'element-ui'
export default {
	name: 'CharacterOnly',

	data () {
		return {
			urlBase: 		'https://rickandmortyapi.com/api/',
			characterId:	'',
			character: 		[],
		}
	},
	mounted: function(){
		this.getCharacter();
	},
	methods: {
		getCharacter: function(){
			axios.get(`${this.urlBase}character/${this.$route.params.characterId}/`)
			.then((response) => {
				this.character = response.data;
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {

			});
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

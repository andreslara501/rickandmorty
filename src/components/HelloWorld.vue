<template>
	<div>
		<el-row
			:body-style="{ margin: '10px' }"
		>
			<el-col
				:span="6"
				:xs="24"
				:sm="24"
				:md="12"
				style="padding: 10px"
			>
				<search :urlBase="urlBase"/>
			</el-col>
			<el-col
				:span="6"
				:xs="24"
				:sm="24"
				:md="12"
				style="padding: 10px"
				v-if="$store.state.searching.length == 0"
			>
				<el-button
					type="primary"
					plain
					@click="backPage"
					:disabled="$store.state.page==1"
				>
					Anterior
				</el-button>
				<span style="padding: 20px 50px">Página {{$store.state.page}}</span>
				<el-button
					type="primary"
					plain
					@click="nextPage"
					:disabled="$store.state.page==30"
				>
					Siguiente
				</el-button>
			</el-col>
		</el-row>

		<el-row
			:body-style="{ margin: '10px' }"
		>
			<div v-if="!$store.state.loading">
				<character
					v-if="$store.state.characters != 0"
					:characters="$store.state.characters"
				/>
				<div
					v-else
					style="margin: 10px"
				>
					No se encontraron resultados
				</div>
			</div>
			<div v-else>
				<div
					v-loading="$store.state.loading"
					:fullscreen="false"
					style="margin-top: 30px"
				/>
			</div>
		</el-row>

	</div>
</template>

<script>
import axios from "axios";
import character from './Character.vue'
import search from './Search.vue'

import {
  Select,
  Button
  // ...
} from 'element-ui'
export default {
	name: 'HelloWorld',

	components: {
		character,
		search
	},
	data () {
		return {
			urlBase: 		'https://rickandmortyapi.com/api/',
			characters: 	[],
			page: 			1
		}
	},
	mounted: function(){
		this.getCharacters();
	},
	methods: {
		getCharacters: function(){
			axios.get(`${this.urlBase}character/?page=${this.$store.state.page}`)
			.then((response) => {
				this.$store.commit('setCharacters', response.data.results);
				this.characters = this.$store.state.characters;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		},
		backPage: function(){
			this.$store.commit('setPage', this.$store.state.page - 1);
			this.getCharacters();
		},
		nextPage: function(){
			this.$store.commit('setPage', this.$store.state.page + 1);
			this.getCharacters();
		}
	}
}
</script>

<style>
</style>

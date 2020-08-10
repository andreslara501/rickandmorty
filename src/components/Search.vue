<template>
	<el-input
		placeholder="Inserta tu búsqueda"
		v-model="search"
		class="input-with-select"
		@input="searchCharacters"
	>
		<el-button
			slot="append"
			icon="el-icon-search"
		/>
	</el-input>
</template>

<script>
import axios from "axios";
export default {
	name: "CompHijo",
	props: {
		urlBase: String
	},
	data() {
		return {
			characters: '',
			search:		''
		};
	},
	methods: {
		searchCharacters: function(){
			this.$store.commit('setLoading', true);

			this.$store.commit('setSearching', this.search);

			if(this.search.length == 0){
				this.getCharacters();
				this.$store.commit('setLoading', false);
			}else{
				axios.get(`${this.urlBase}character/?name=${this.search}`)
				.then((response) => {
					this.$store.commit('setLoading', false);

					this.$store.commit('setCharacters', response.data.results);
					this.characters = this.$store.state.characters;
				})
				.catch((error) => {
					this.$store.commit('setLoading', false);
					this.$store.commit('setCharacters', []);
					this.characters = [];
				})
			}
		},
		getCharacters: function(){
			axios.get(`${this.urlBase}character/?page=${this.$store.state.page}`)
			.then((response) => {
				this.$store.commit('setCharacters', response.data.results);
			})
		},
	}
};
</script>

<style scoped>
	.el-card img{
		width: 100%;
	}
</style>
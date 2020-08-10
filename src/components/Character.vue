<template>
	<div>
		<el-col
			v-for="character in characters"
			:key="character.id"

			:span="6"
			:xs="24"
			:sm="12"
			:md="6"
			:lg="6"
			:xl="6"
			style="padding: 10px"
		>
			<el-card :body-style="{ padding: '0px' }">
				<img :src="character.image" class="image">
				<div style="padding: 14px;">
					<span>{{character.name}}</span>
					<div class="bottom clearfix">
						<a
							:href="`/personaje/${character.id}`"
							target="_blank"
						>
							<el-button type="text" class="button">Ver más info »</el-button>
						</a>
					</div>
				</div>
			</el-card>
		</el-col>
	</div>
</template>

<script>
export default {
  name: "CompHijo",
  props: {
    characters: Array
  },
  data() {
    return {
      item: ''
    };
  }
};
</script>

<style scoped>
	.el-card img{
		width: 100%;
	}
</style>
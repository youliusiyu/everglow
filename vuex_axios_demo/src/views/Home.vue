<template>
  <div id="app">
    <div class="top">
		
		<v-menu></v-menu>
    </div>
    <div class="cneter">
    	<v-sidebar></v-sidebar>
		<router-view />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import vSidebar from '../components/sidebar.vue'
import vMenu from '../components/menu.vue'


export default {
	components:{
		vSidebar,
		vMenu
	}
 
}
</script>
<style scoped>
	#app {
		margin: 0;
		padding: 0;
		width: 100vw;
	  font-family: Avenir, Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  /* text-align: center; */
	  color: #2c3e50;
	  display: flex;
	  flex-direction: column;
	}
	
	.top {
		width: 100%;
	}
	.cneter {
		display: flex;
		flex-direction: row;
	}
	.sidebar {
		width: 200px;
		height: 100%;
	}
	.main {
		flex: 1;
		text-align: center;
	}
</style>

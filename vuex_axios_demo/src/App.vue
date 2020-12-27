<template>
	<div id="app">
		<div class="top">
		  <router-view class="menu" name="a" />
		</div>
		<div class="cneter">
			<router-view class="sidebar" name="b" />
			<router-view class="main" />
		</div>
	</div>
</template>

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

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pageButton">测试button</router-link> |
      <router-link to="/pageDivider">测试dividern</router-link> |
      <router-link to="/pageSlider">测试dividern</router-link> |
      <router-link to="/pageHeadline">测试PageHeadline</router-link> |
      <router-link to="/pageDialog">测试PageDialog</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <header class="header">
    <div class="container">
      <div class="header__logo" v-if="$route.path === '/'">
        <span>
          <img src="@/assets/logo.svg" alt="App logo"/>
        </span>
      </div>
      <div class="header__logo" v-else>
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="App logo"/>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  padding: 1rem 0px;
  &__logo {
    max-width: 3rem;
    max-height: 3rem;
  }
}
</style>
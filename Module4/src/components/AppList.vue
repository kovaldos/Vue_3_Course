<template>
  <div class="card">
    <ul>
      <li v-for="(item, i) in 5">
        <slot :iter="item" :idx="i">{{ item }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-list"
}
</script>

<style scoped>

</style>
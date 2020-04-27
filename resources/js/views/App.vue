<template>
  <div class="container-fluid px-0">
    <div class="container-fluid px-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    NavbarComponent
  },
  mounted() {
    console.log('App mounted.')
  }
}
</script>
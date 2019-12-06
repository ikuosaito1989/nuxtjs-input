<template>
  <div>
    <div>this user Pages</div>
    <span>Message: {{ id }}</span>
    <div>pram id</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: 0
  }),
  created() {
    this.id = this.$route.params.id
  }
}
</script>

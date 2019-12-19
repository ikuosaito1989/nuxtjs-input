<template>
  <div>
    <div>YoutubeId: {{ youtubeId }}</div>
    <div>Title: {{ item.snippet.title }}</div>
    <img :src="item.snippet.thumbnails.standard.url" />
  </div>
</template>

<script>
export default {
  data: () => ({
    youtubeId: 0,
    item: null
  }),
  async asyncData({ params, app }) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=AIzaSyBPmbOgEbbGjUCaI3W6q3LYv2zRDf7JtpM`
    const response = await app.$axios.$get(url)
    return { item: response.items[0] }
  },
  created() {
    this.youtubeId = this.$route.params.id
  }
  // validate({ params }) {
  //   // 数値でなければならない
  //   return /^\d+$/.test(params.id)
  // }
}
</script>

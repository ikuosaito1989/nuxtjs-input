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
  asyncData({ params, app, error }) {
    const output404 = '111'
    const url = `https://www.googleapis.com/youtube${output404}/v3/videos?part=snippet&id=${params.id}&key=AIzaSyBPmbOgEbbGjUCaI3W6q3LYv2zRDf7JtpM`
    return app.$axios
      .$get(url)
      .then((response) => {
        return { item: response.items[0] }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'ページが見つかりません' })
      })
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

<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        myApp
      </h1>
      <h2 class="subtitle">
        My posh Nuxt.js project
      </h2>
      <transition>
        <nuxt-link to="/my-favorite">
          my favorite songs
        </nuxt-link>
      </transition>
      <a @click="openNotification">open</a>
      <button @click="increment">increment</button>
      <div>{{ counter }}</div>
      <notifications group="foo" />
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'default',
  components: {
    Logo
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    }
  },
  methods: {
    openNotification() {
      this.$notify({
        title: 'メッセージです。',
        text: 'click to ',
        duration: 100,
        group: 'foo',
        type: 'error'
      })
    },
    increment() {
      this.$store.dispatch('set', 5)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

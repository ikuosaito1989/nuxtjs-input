<template>
  <div>
    <div>this user Pages</div>
    <transition>
      <nuxt-link to="/user/1">
        go to user 1
      </nuxt-link>
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>

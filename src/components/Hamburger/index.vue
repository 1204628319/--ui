<template>
  <div style="padding: 0 10px;" @click="toggleClick">
    <i class="iconfont iconshow_menu_icon1" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="flex text-center">
    <template v-for="(item, i) in social">
      <button
        :key="i"
        :style="sizes"
        class="btn btn-outline-secondary mx-2"
        @click="open(item.link)"
        v-tooltip.bottom="!showTooltip ? item.title : ''"
      >
        <i :class="item.icon"></i>
      </button>
    </template>
  </div>
</template>

<script>
import info from '@/content'

export default {
  name: 'SocialLinks',
  data() {
    return {
      social: info.socialLinks,
    }
  },
  props: {
    showTooltip: {
      type: Boolean,
      default: false,
    },
    sizes: {
      type: Object,
    },
  },
  methods: {
    open(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  i {
    font-size: inherit;
    color: var(--color-violet-l-1);
  }
}
</style>

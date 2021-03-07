<template>
  <div class="b-flex text-center">
    <template v-for="(item, i) in social">
      <b-button
        :key="i"
        :style="sizes"
        class="mx-2"
        variant="primary"
        @click="open(item.link)"
        v-tooltip.bottom="!showTooltip ? item.title : ''"
      >
        <b-icon variant="white" :icon="item.icon"></b-icon>
      </b-button>
    </template>
  </div>
</template>

<script>
import info from '@/data'

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
  width: initial;
  i {
    font-size: inherit;
    // color: var(--color-violet-l-1);
  }
}
</style>

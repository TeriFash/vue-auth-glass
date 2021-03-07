<template>
  <div class="logo-div">
    <span class="logo-title-name">{{ name }}</span>
    <span class="logo-title-dot text-primary">{{ dot }}</span>
  </div>
</template>

<script>
import info from '@/data'

export default {
  name: 'Logo',
  data() {
    return {
      name: info.logo_name,
      dot: '.',
    }
  },
}
</script>

<style scoped lang="scss">
.logo-div:hover .logo-title-name {
  letter-spacing: 0px;
  transition: 0.5s all;
}

.logo-title-name {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s all;
}

.logo-title-dot {
  font-size: 30px;
  font-weight: 700;
}
</style>

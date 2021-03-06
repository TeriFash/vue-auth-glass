<template>
  <div class="footer">
    <div class="container py-3">
      <div class="row align-items-center">
        <div
          class="footer-text flex align-items-center col-xl-6 col-bg-6 col-md-6 col-sm-12"
        >
          © {{ copyright }}: <Wave> {{ name }} </Wave>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <SocialLinks show-tooltip />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from '@/components/helpers/SocialLinks'
import Wave from '@/components/helpers/Wave'
import info from '@/data'

export default {
  name: 'Footer',
  data() {
    return {
      name: info.name,
      copyright: info.copyright,
    }
  },
  components: {
    SocialLinks,
    Wave,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: var(--bg-d-1);
}

.footer-text {
  font-weight: 500;
  text-align: center;
}

@media screen and (max-width: 760px) {
  .footer-text {
    padding-bottom: 20px;
    padding-top: 20px;
    justify-content: center;
  }
}
</style>

<template>
  <div class="footer">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="footer-text col-xl-6 col-bg-6 col-md-6 col-sm-12">
          © {{ copyright }}: <Wave> {{ name }} </Wave>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="flex text-center">
            <template v-for="(item, i) in social">
              <button
                :key="i"
                class="btn btn-outline-secondary mx-2"
                @click="open(item.link)"
              >
                <i :class="item.icon"></i>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from '@/content'
import Wave from '@/components/helpers/Wave'

export default {
  name: 'Footer',
  data() {
    return {
      name: info.name,
      social: info.socialLinks,
      copyright: info.copyright,
    }
  },
  components: {
    Wave,
  },
  methods: {
    open(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: var(--bg);
}

.footer-text {
  font-weight: 500;
}

.fa,
.fas,
.fab {
  font-size: 15px;
  transition: all 0.5s;
}

.btn {
  &:hover,
  &:focus {
    i {
      color: var(--color-white);
    }
  }
}

@media screen and (max-width: 960px) {
  .footer-text {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>

<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top p-st"
      :class="{ 'navbar-blur': navbarConfig.blur }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <b-icon icon="text-right"></b-icon>
          </span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <template v-for="(item, i) in navList">
              <li :key="i" class="nav-item mx-2">
                <a
                  class="nav-link"
                  :href="`/${item}`"
                  @click.prevent="$emit('scroll', item)"
                >
                  {{ item }}
                </a>
              </li>
            </template>
            <li class="nav-item ml-3">
              <DarkMode
                class="nav-item-theme"
                :modes="['light', 'dark']"
                :meta-theme-color="{
                  light: '#ebecf0',
                  dark: '#303030',
                }"
                @change-mode="toggleColorMode"
              >
                <template #default="{ mode }">
                  <b-icon
                    :icon="`toggle-${mode === 'dark' ? 'on' : 'off'}`"
                    :variant="mode === 'dark' ? 'primary' : ''"
                    v-tooltip.bottom="switchText(mode)"
                    scale="2"
                  ></b-icon>
                </template>
              </DarkMode>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '@/components/helpers/Logo'
import info from '@/data'
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',

  data() {
    return {
      navbarConfig: info.config.navbar,
      sections: info.sections,
    }
  },

  computed: {
    navList() {
      const { home, recommendation, ...list } = this.sections

      return list
    },
  },

  methods: {
    ...mapActions(['toggleColorMode']),
    switchText(text) {
      let message
      switch (text) {
        case 'dark':
          message = 'To Light Mode'
          break
        case 'light':
          message = 'To Night Mode'
          break
        case 'system':
          message = 'To System Mode'
          break
      }

      return message
    },
  },

  components: {
    Logo,
  },
}
</script>

<style lang="scss">
.navbar {
  &-brand {
    line-height: 28px !important;

    .logo-div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.nav-link {
  font-weight: 500;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
}

.nav-item {
  &-theme {
    height: 100%;
    min-width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    svg {
      transition: all 0.5s;
    }
  }
}
</style>

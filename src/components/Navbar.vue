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
          dataToggle="collapse"
          data-target="#navbarSupported"
          aria-controls="navbarSupported"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > <span style=" font-size: 23px;"><i class="fas fa-bars"></i></span>
        </button>

        

        <div id="navbarSupported" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
              >
                about about
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
              >
                skills
              </a>
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
              >
                portfolio
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
              >
                contact
              </a>
            </li>
            <li class="nav-item ml-2">
              <DarkMode
                :modes="['light', 'dark']"
                :meta-theme-color="{
                  light: '#f4f6f5',
                  dark: '#0e151b'
                }"
                @change-mode="toggleColorMode"
              >
                <template v-slot="{ mode }">
                  <i
                    v-tooltip.bottom="switchText(mode)"
                    :class="{
                      'fas fa-moon': mode === 'dark',
                      'far fa-moon': mode === 'light'
                    }"
                  ></i>
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
import Logo from "@/components/helpers/Logo";
import info from "@/content";
import { mapActions } from "vuex";

export default {
  name: "Navbar",
   
   components: {
    Logo
  },

  data() {
    return {
      navbarConfig: info.config.navbar
    };
  },

     components: {
    Logo
  },
  methods: {
    ...mapActions({
      toggleColorMode: "toggleColorMode"
    }),
    switchText(text) {
      let message;
      switch (text) {
        case "dark":
          message = "To Light Mode";
          break;
        case "light":
          message = "To Night Mode";
          break;
        case "system":
          message = "To System Mode";
          break;
      }

      return message;
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid var(--bg-l-2);
  // position: fixed !important;
  background: var(--bg);

  &.navbar-blur {
    background-color: var(--bg);
    backdrop-filter: blur(12px);
  }
}

.nav-link {
  font-weight: 500;
}

.nav-item {
  button {
    padding-left: 0;
  }
}

.navbar-brand,
.nav-link {
  color: var(--color-secondary);
}

button {
  border: none;
  outline: none;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  &:hover {
    border: none;
    outline: none;
    color: var(--color-secondary);
  }
}

.fa,
.fas {
  color: var(--color);
  font-size: 15px;
}
</style>

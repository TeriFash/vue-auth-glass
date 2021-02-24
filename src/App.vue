<template>
  <div id="app">
    <Navbar @scroll="scrollTo" />
    <div class="parent">
      <Home />
      <About id="about" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Recommendation />
      <Contact id="contact" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Recommendation from "@/components/Recommendation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import info from "@/content";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Recommendation,
    Contact,
    Footer
  },
  data() {
    return {
      config: info.config
    };
  },
  computed: {
    ...mapGetters({
      colorMode: "colorMode"
    }),
    isTheme() {
      return this.colorMode && localStorage.getItem("colorMode");
    }
  },
  mounted() {
    ["about", "contact", "skills", "portfolio"].forEach(l => {
      if (window.location.href.includes(l)) {
        const elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
    // setTimeout(() => {
    //   document.body.style.transition = "background-color .3s";
    // }, 1000);
  },
  methods: {
    ...mapActions({
      initializeMode: "initializeMode"
    }),
    scrollTo(ele) {
      if (ele == "home") {
        this.$router.push(`/`);
        window.scrollTo({ top: -80, behavior: "smooth" });
      } else {
        const elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
        if (this.$router.history.current.path !== `/${ele}`)
          this.$router.push(`/${ele}`);
      }
    }
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

.parent {
  background: var(--bg-d-1);
  margin-top: 38px;
  padding-top: 40px;
  position: relative;
}

.p-st {
  transition: all 0.5s !important;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: var(--color-violet);
  color: var(--color-white);
  border-radius: 8px;
  font-size: 10px;
  /* padding: 5px 10px 4px; */
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: var(--color-violet);
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: var(--bg);
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: var(--bg);
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>

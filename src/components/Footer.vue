<template>
  <div class="footer">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="footer-text col-xl-6 col-bg-6 col-md-6 col-sm-12">
          © 2020 Copyright: <Wave>Gura Viktor</Wave>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="flex text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('angellist')"
            >
              <i class="fab fa-angellist"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "@/content";
import Wave from "@/components/helpers/Wave";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      angellist: info.links.angellist,
      resume: info.links.resume
    };
  },
  components: {
    Wave
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "angellist":
          window.open(this.angellist, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    }
  }
};
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

@media screen and (max-width: 580px) {
  .footer-text {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>

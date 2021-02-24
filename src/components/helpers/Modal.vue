<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="title1 px-4 pt-3">
            <span
              ><a href="#" @click.prevent="open(portfolio.visit)">{{
                portfolio.name
              }}</a></span
            >
            <a
              class="pull-right"
              style="font-size: 18px;"
              @click="$emit('close')"
              ><i class="fas fa-times"></i
            ></a>
            <hr class="my-1 pg-line" />
          </div>
          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <div class="mb-2 date">
              <span>{{ portfolio.date }} • {{ portfolio.category }}</span>
            </div>
            <div class="pb-1 bheight">
              <span
                class="badge mr-2 mb-2"
                v-for="tech in portfolio.technologies"
                :key="tech"
                >{{ tech }}</span
              >
            </div>

            <div style="text-align: justify;">
              <span v-html="portfolio.description"></span>
            </div>
            <hr />
            <div>
              <Gallery :images="portfolio.pictures" />
            </div>
          </div>

          <div class="text-center pb-3">
            <hr class="mt-1 mb-3 pg-line" />
            <button class="btn w-25 mr-3" @click="open(portfolio.github)">
              github
            </button>
            <button class="btn w-25" @click="$emit('close')">close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Gallery from "./Gallery";

export default {
  name: "Modal",
  components: {
    Carousel,
    Gallery
  },
  props: {
    showModal: {
      type: Boolean
    },
    portfolio: {
      type: Object
    }
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped lang="scss">
.modal-open {
  overflow: hidden;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 40%;
  max-height: 70%;
  margin: 0px auto;
  border-radius: 7px;
  background-color: var(--bg-d-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 60%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 80%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 90%;
  }
}

.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.title1 a {
  text-decoration: none;
}

.fas,
.fab {
  color: var(--color);
}
</style>

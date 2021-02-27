<template>
  <div class="portfolio py-4 p-st">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span class="title text-center">{{ title }}.</span>
      </div>
      <hr width="50%" />

      <vue-tabs :activeTextColor="colorMode === 'dark' ? '#ebf4f1' : '#243746'">
        <v-tab title="development">
          <br />
          <div class="row">
            <div
              class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
              v-for="(portfolio, idx) in portfolio_info"
              :key="portfolio.name"
            >
              <Card
                :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
                :portfolio="portfolio"
                @show="showModalFn"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
            </div>
          </div>
          <div class="text-center py-3" v-if="showBtn !== 'show less'">
            <button class="btn" @click.prevent="showMore">{{ showBtn }}</button>
          </div>
        </v-tab>

        <v-tab title="design">
          <div class="row container-second">
            <div
              v-for="(design, idx) in desgin_info"
              :key="idx"
              :class="{ 'mt-4': idx === 0 ? true : true }"
              class="col-xl-6 col-bg-6 col-md-12 col-sm-12"
              style="position: relative;"
            >
              <vueper-slides
                :dragging-distance="50"
                fixed-height="300px"
                :bullets="false"
                slide-content-outside="bottom"
                style="position: aboslute"
                @click.prevent="showDesignModalFn(design)"
              >
                <vueper-slide
                  v-for="(slide, i) in design.pictures"
                  :key="i"
                  :image="slide.img"
                />
              </vueper-slides>
              <div
                style="width: 100%; display: flex; justify-content: space-between"
                class="mt-2 container-second-info"
              >
                <div>
                  <div class="title2" style="font-weight: 500;">
                    {{ design.title }}
                  </div>
                  <span
                    class="badge mr-2 mb-2"
                    v-for="tech in design.technologies"
                    :key="tech"
                    >{{ tech }}</span
                  >
                  •
                  <span class="date ml-1">{{ design.date }}</span>
                </div>

                <button
                  style="height: 31px; margin-top: 5px;"
                  class="btn-sm btn btn-main"
                  @click.prevent="showDesignModalFn(design)"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <br />
        </v-tab>
      </vue-tabs>
    </div>
    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
      />
    </transition>
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
      />
    </transition>
  </div>
</template>

<script>
import Card from '@/components/helpers/Card'
import Modal from '@/components/helpers/Modal'
import DesignModal from '@/components/helpers/DesignModal'
import Carousel from '@/components/helpers/Carousel'
import info from '@/content'

import { VueTabs, VTab } from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio',
  components: {
    Card,
    Modal,
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  data() {
    return {
      title: info.sections.portfolio,
      all_info: info.portfolio,
      desgin_info: info.portfolio_design,
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: 'show more',
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    }
  },
  created() {
    for (let i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i])
    }
  },
  watch: {
    number() {
      this.portfolio_info = []
      for (let i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i])
      }
    },
  },
  computed: {
    ...mapGetters({
      colorMode: 'colorMode',
    }),
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    },
    closeModal() {
      this.showModal = false
      this.showDesignModal = false
      document.getElementsByTagName('body')[0].classList.remove('modal-open')
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio
      this.showModal = true
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio
      this.showDesignModal = true
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3

        window.scrollBy({
          top: document.getElementsByClassName('smcard')[0].clientHeight,
          behavior: 'smooth',
        })

        if (this.number > this.all_info.length)
          this.number = this.all_info.length
      }

      if (this.number == this.all_info.length && this.shower == 0) {
        this.shower = 1
        this.showBtn = 'show less'
      } else if (this.number == this.all_info.length && this.shower == 1) {
        const elementPosition = document.getElementById('portfolio').offsetTop
        window.scrollTo({ top: elementPosition + 5, behavior: 'smooth' })
        this.shower = 0
        this.number = 3
        this.showBtn = 'show more'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.portfolio {
  background-color: var(--bg-l-1);
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.btn {
  border-color: var(--color-violet);
  background-color: var(--color-violet);
  color: var(--color-white);
  outline: none !important;

  &:hover,
  &:focus,
  &:active {
    outline: none !important;
    border-color: var(--color-violet-d-1);
    background-color: var(--color-violet-d-1);
  }
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;

  & > li {
    &.active > a {
      background: transparent;
      border: none;
      transition: all 0.5s;
      padding-right: 0;
      padding-left: 0;
      margin-right: 15px;
      margin-left: 15px;

      &:after {
        width: 100%;
        color: var(--color-violet);
        transition: all 0.5s;
      }
    }

    & > a {
      color: var(--color-l-1);
      background: transparent;
      border: none;
      transition: all 0.5s;

      span {
        color: var(--color-l-1);

        font-size: 20px;
      }

      &:after {
        content: '';
        width: 20%;
        position: absolute;
        bottom: 3px;
        color: var(--color-l-1);
        border-width: 0 0 2px;
        border-style: solid;
        transition: all 0.5s;
      }

      &:hover {
        background: transparent;
        color: var(--color-violet);
        transition: all 0.5s;
      }
    }
  }
}

// /deep/ .vue-tabs .tabs__link {
//   // color: var(--color-violet);
// }

// /deep/ .vue-tabs .nav-tabs > li.active > a {
//   background: transparent;
//   border: none;
//   transition: all 0.5s;
//   padding-right: 0;
//   padding-left: 0;
//   margin-right: 15px;
//   margin-left: 15px;
// }

// /deep/ .vue-tabs .nav-tabs > li > a:hover {
//   background: transparent;
//   color: var(--color-violet);
//   transition: all 0.5s;
// }

// /deep/ .vue-tabs .nav-tabs > li > a {
//   background: transparent;
//   border: none;
//   transition: all 0.5s;
// }

// /deep/ .vue-tabs .nav-tabs > li > a:after {
//   content: "";
//   width: 20%;
//   position: absolute;
//   bottom: 3px;
//   color: #a1a1a1; // var(--color);
//   border-width: 0 0 2px;
//   border-style: solid;
//   transition: all 0.5s;
// }

// /deep/ .vue-tabs .nav-tabs > li.active > a:after {
//   width: 100%;
//   color: var(--color-violet);
//   transition: all 0.5s;
// }

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;

  &:hover {
    & .design-img {
      position: relative;
      border-radius: 15px;
      opacity: 0.1;
      cursor: pointer;
    }

    & .middle {
      opacity: 1;
    }
  }
}

.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

// .dimg:hover .design-img {
//   position: relative;
//   border-radius: 15px;
//   opacity: 0.1;
//   cursor: pointer;
// }

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: var(--color);
}

.badge {
  font-size: 13px;
}

.date {
  opacity: 0.75;
}

.container-second {
  .btn {
    width: 40%;
  }
}

@media screen and (max-width: 640px) {
  .container-second {
    &-info {
      flex-direction: column;

      .btn {
        width: 100%;
      }
    }
  }
}
</style>

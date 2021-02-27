<template>
  <div class="pt-5 p-st">
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span class="home-title">{{ title }}!</span>
          <div>
            <p v-html="description"></p>
          </div>
          <div class="flex text-center pb-4">
            <template v-for="(item, i) in social">
              <button
                :key="i"
                class="btn btn-outline-secondary mx-2"
                @click="open(item.link)"
                v-tooltip.bottom="item.title"
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

export default {
  name: 'Home',

  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      social: info.socialLinks,
      name: info.name,
      title: info.titleDescription,
    }
  },
  methods: {
    open(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.home-title {
  font-size: 28px;
  font-weight: 500;
}

img {
  max-width: 300px;
  margin-top: 60px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa,
.fas,
.fab {
  font-size: 15px;
}

.btn {
  &:hover,
  &:focus {
    i {
      color: var(--color-white);
    }
  }
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>

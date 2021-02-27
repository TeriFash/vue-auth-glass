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
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-4">
          <div class="home-title mb-3">{{ title }}!</div>
          <div>
            <p v-html="description"></p>
          </div>
          <SocialLinks
            :sizes="{ width: '50px', height: '50px', fontSize: '22px' }"
            class="pb-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from '@/content'
import SocialLinks from '@/components/helpers/SocialLinks'

export default {
  name: 'Home',

  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      title: info.titleDescription,
    }
  },
  components: {
    SocialLinks,
  },
}
</script>

<style lang="scss" scoped>
.home-title {
  font-size: 28px;
  font-weight: 600;
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
    border: 2px solid rgb(132, 132, 132);
  }
}

p {
  text-align: justify;
  font-weight: 400;
}
</style>

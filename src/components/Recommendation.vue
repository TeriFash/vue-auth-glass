<template>
  <div class="p-st recommendation">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span class="title text-center">{{ title }}.</span>
      </div>
      <hr width="50%" class="pg-line" />
      <div class="row">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5"
          v-for="d in data"
          :key="d.author"
        >
          <div
            class="title2"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <span>"{{ d.title }}"</span>
          </div>
          <div
            class="title3 float-right py-2 pl-5"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <span>
              – {{ d.author }}, {{ d.position }}, {{ d.company }},
              {{ d.location }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from '@/content'

export default {
  name: 'Recommendation',
  data() {
    return {
      title: info.sections.recommendation,
      data: info.recommendations,
    }
  },
}
</script>

<style lang="scss" scoped>
.title2 {
  font-size: 18px;
  font-style: italic;
  text-align: justify;
}

.title3 {
  opacity: 0.7;
  text-align: right;
}
</style>

<template>
  <div class="about py-4 p-st">
    <div class="container">
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
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="education" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/helpers/Timeline'
import info from '@/content'

export default {
  name: 'About',
  components: {
    Timeline,
  },
  data() {
    return {
      title: info.sections.about,
      education: {
        title: 'education',
        data: info.education,
      },
      experience: {
        title: 'experiences',
        data: info.experience,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.about {
  background: var(--bg-d-1);
}
</style>

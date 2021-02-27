<template>
  <div class="skills p-st">
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
      <br />
      <div class="row">
        <div
          class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div><i :class="skill.icon"></i></div>
          <div class="title2 pt-2">{{ skill.title }}</div>
          <hr width="50%" class="pg-line" />
          <span class="title3">{{ skill.info.join(', ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from '@/content'

export default {
  name: 'Skills',
  data() {
    return {
      title: info.sections.skills,
      skills: info.skills,
    }
  },
}
</script>

<style scoped>
.skills {
  background: var(--bg-d-1);
}

.fa,
.fas,
.fab {
  font-size: 40px;
}
</style>

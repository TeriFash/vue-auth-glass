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
          v-for="(item, i) in skillsData"
          :key="i"
          class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center mb-5"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': `${i / 4.2}s` }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <SkillsList :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillsList from '@/components/helpers/SkillsList'
import { appData, skillsData } from '@/data'
// import skillsData from '@/data/skills.js'

export default {
  name: 'Skills',
  data() {
    return {
      title: appData.sections.skills,
      skills: appData.skills,
      skillsData: skillsData,
    }
  },
  components: {
    SkillsList,
  },
}
</script>

<style scoped>
.skills {
}

.fa,
.fas,
.fab {
  font-size: 40px;
}
</style>

<template>
  <div class="p-st skills-wrapper">
    <div class="p-4 smlistitem">
      <div class="text-center pt-2">
        <i :class="`fa ${data.icon}`"></i>
        <div class="title2 pt-2">{{ data.title }}</div>
        <hr width="50%" class="pg-line" />
      </div>

      <div class="skills-list">
        <div
          class="skills-list-item"
          v-for="(item, i) in data_list"
          :key="i"
          :style="{ 'transition-delay': `${(i % 3) / 4.2}s` }"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="10"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <img :src="item.img" :alt="item.text" :title="item.title" />
        </div>

        <b-button
          @click.prevent="showMore"
          v-if="data.list.length > number && showBtn !== 'show less'"
        >
          {{ showBtn }}...
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsList',
  data() {
    return {
      number: 10,
      showBtn: 'show all',
      shower: 0,
      data_list: [],
    }
  },
  created() {
    if (this.data.list.length < this.number) {
      this.data_list = this.data.list
    } else {
      for (let i = 0; i < this.number; i++) {
        this.data_list.push(this.data.list[i])
      }
    }
  },
  watch: {
    number() {
      this.data_list = []
      for (let i = 0; i < this.number; i++) {
        this.data_list.push(this.data.list[i])
      }
    },
  },
  computed: {},
  methods: {
    showMore() {
      if (this.number != this.data.list.length) {
        this.number += this.data.list.length

        if (this.number > this.data.list.length) {
          this.number = this.data.list.length
        }
      }

      if (this.number == this.data.list.length && this.shower == 0) {
        this.shower = 1
        this.showBtn = 'show less'
      } else if (this.number == this.data.list.length && this.shower == 1) {
        const elementPosition = document.getElementById('skills').offsetTop
        window.scrollTo({ top: elementPosition + 50, behavior: 'smooth' })
        this.shower = 0
        this.number = 3
        this.showBtn = 'show all'
      }
    },
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style scoped lang="scss">
.skills-wrapper {
  // background: var(--color-white);
  border-radius: 7px;

  .title2 {
    // color: var(--bg);
  }
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  // align-content: flex-start;

  &-item {
    padding: 5px;
    cursor: pointer;
    flex: 40px;
    img {
      margin: 0 auto;
      max-width: 35px;
      width: 100%;
      height: auto;
    }
  }

  &-btn {
    min-width: 120px;
    // color: var(--bg) !important;
  }
}

.fa,
.fas,
.fab {
  font-size: 40px;
}
</style>

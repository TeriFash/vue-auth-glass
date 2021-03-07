<template>
  <div>
    <div class="mx-3 mt-3 mb-5">
      <div class="row">
        <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <p
            class="title1"
            data-aos="fade"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
          >
            {{ data.title }}
          </p>
          <ul
            class="timeline m-0 pt-1"
            v-for="(e, i) in data.data"
            :key="e.name"
            :style="{ 'transition-delay': `${i / 4.2}s` }"
            data-aos="fade-up"
            data-offset="10"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="500"
          >
            <li class="m-0 pb-2">
              <div>
                <div class="px-2 title2">{{ e.name }}, {{ e.place }}</div>
                <div class="px-2 title3">
                  {{ e.degree || e.position }}
                  {{ e.gpa ? '(' + e.gpa + ')' : '' }}
                </div>
                <div class="px-2 date">{{ e.date }}</div>
                <div class="px-2 py-2 text-justify">
                  {{ e.description }}
                </div>
                <span
                  class="mx-1 badge p-2 mb-2"
                  v-for="s in e.skills"
                  :key="s"
                  >{{ s }}</span
                >
                <p class="m-2"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    data: {
      type: Object,
    },
  },
}
</script>

<style scoped lang="scss">
.title1 {
  font-weight: 500;
}

.date {
  font-weight: 300;
}

.badge {
  // color: var(--color-white);
  background-color: var(--primary);
  font-weight: 600;

  &:hover {
    box-shadow: 2px 2px 5px var(--primary);
    opacity: 1;
  }
}

ul.timeline {
  list-style-type: none;
  position: relative;

  &:before {
    content: ' ';
    background: var(--light);
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 93%;
    margin-top: 20px;
    z-index: 400;
  }

  & > li {
    margin: 20px 0;
    padding-left: 20px;

    &:before {
      content: ' ';
      background: var(--primary);
      display: inline-block;
      position: absolute;
      border-radius: 50%;
      border: 2px solid var(--primary);
      left: 20px;
      width: 20px;
      height: 20px;
      z-index: 400;
    }
  }
}
</style>

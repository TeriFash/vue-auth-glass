<template>
  <div class="my-3 mx-3">
    <div class="card smcard">
      <div class="card-img-container">
        <img
          class="card-img-top"
          :src="portfolio.pictures[0].img"
          alt="Card image cap"
        />
      </div>
      <div class="card-body pborder-top">
        <h5 class="title2">{{ portfolio.name }}</h5>
        <div>
          <div class="pb-1 bheight">
            <span
              class="badge mr-2 mb-2 "
              v-for="tech in portfolio.technologies"
              :key="tech"
              >{{ tech }}</span
            >
          </div>
          <p
            class="title3 m-0 pb-2 pheight pt-1"
            v-html="
              portfolio.description.length > 100
                ? portfolio.description.substring(0, 105) + '...'
                : portfolio.description
            "
          ></p>
        </div>
        <div class="card-button-container flex text-center mt-2">
          <button href="" class="btn-sm btn" @click.prevent="showModal">
            read more
          </button>
          <button
            href="#"
            class="btn-sm btn"
            v-if="portfolio.visit"
            @click.prevent="open(portfolio.visit)"
          >
            visit website
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    portfolio: {
      type: Object,
    },
  },
  methods: {
    open(url) {
      window.open(url, '_blank')
    },
    showModal() {
      this.$emit('show', this.portfolio)
    },
  },
}
</script>

<style scoped lang="scss">
$border-radius: 7px;

.card-img-container {
  min-height: 180px;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-white);

  img {
    width: 100%;
  }
}

img {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.img-div img {
  /* object-fit: cover; */
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* object-position: 50% 120%;
    max-width: 300px !important; */
}

.bheight {
  height: 65px;
  overflow: auto;
}

.pheight {
  height: 110px;
  max-height: 130px;
  overflow: auto;
  text-align: justify;
}

div.img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}

.card {
  background: var(--bg-l-1);
  border-radius: $border-radius;
  border: none;
  box-shadow: 3px 3px 17px var(--bg-d-3);
  transition: all 0.5s;
  min-height: 460px;

  &:hover {
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: 7px 3px 22px var(--bg-d-3);
  }
}

.card-button-container {
  justify-content: space-between;

  button {
    width: 47%;
    color: var(--color-secondary);
    &:hover,
    &:focus {
      color: var(--color-white);
    }
  }
}

.card-body {
  border-top: 1px solid var(--bg-d-1);
  border-bottom-right-radius: $border-radius;
  border-bottom-left-radius: $border-radius;
}

.title2,
.title3 {
  color: var(--color-secondary);
}

.badge {
  font-size: 13px;

  &:hover {
    box-shadow: 2px 2px 5px var(--color-violet);
  }
}
</style>

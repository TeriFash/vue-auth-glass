<template>
  <b-card
    class="smcard"
    :title="portfolio.name"
    :img-src="portfolio.pictures[0].img"
    :img-alt="'Card image cap'"
    img-top
    tag="article"
  >
    <div class="pborder-top">
      <div class="pb-1 bheight">
        <span
          class="badge mr-2 mb-2 "
          v-for="tech in portfolio.technologies"
          :key="tech"
          >{{ tech }}</span
        >
      </div>
      <b-card-text
        v-html="
          portfolio.description.length > 100
            ? portfolio.description.substring(0, 105) + '...'
            : portfolio.description
        "
      ></b-card-text>

      <b-button href="" variant="primary" @click.prevent="showModal">
        read more
      </b-button>
      <b-button
        href="#"
        variant="primary"
        v-if="portfolio.visit"
        @click.prevent="open(portfolio.visit)"
      >
        visit website
      </b-button>
    </div>
  </b-card>
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

div.img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}

.card {
  border-radius: $border-radius;
  transition: all 0.5s;
  border: none;
  position: initial;

  img {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    max-width: 100%;
    width: 100%;
    // display: block;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    max-height: 100%;
    min-height: 180px;
    object-position: 50% 50%;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    // object-fit: cover;
  }

  .card-body {
    // border-top: 1px solid var(--bg-d-1);
    // border-bottom-right-radius: $border-radius;
    // border-bottom-left-radius: $border-radius;
    .btn {
      width: 45%;
      margin: 0 2.5%;
    }
  }

  .bheight {
    height: 65px;
    overflow: auto;
  }
}

.badge {
  font-size: 13px;

  &:hover {
    box-shadow: 2px 2px 5px var(--primary);
  }
}
</style>

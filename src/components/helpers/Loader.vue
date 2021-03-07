<template>
  <div
    class="loading-overlay"
    :style="overlayPosition"
    v-if="$store.state.loading"
  >
    <div class="loading-box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlayPosition: {
        top: 0,
      },
    }
  },
  watch: {
    '$store.state.loading'(newVal) {
      document.body.classList.toggle('loading-wrapper')

      if (newVal) {
        this.overlayPosition.top = `${window.pageYOffset - 35}px`
      }
    },
  },
}
</script>

<style lang="scss">
.loading-wrapper {
  overflow: hidden;
  position: relative;
}

.loading-overlay {
  background-color: rgba(44, 44, 44, 0.616);
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  opacity: 0.999;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1040;
}

.loading-box {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;

  &:before,
  &:after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }

  &:before {
    animation: ball1 1s infinite;
    background-color: #cb2025;
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }

  &:after {
    animation: ball2 1s infinite;
    background-color: #00a096;
    box-shadow: 30px 0 0 #97bf0d;
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.8);
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% {
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% {
    -webkit-transform: rotate(720deg) scale(0.8);
    -moz-transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #f8b334;
  }
  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #97bf0d;
  }
  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -20px;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #97bf0d;
    margin-top: 0;
  }
}
</style>

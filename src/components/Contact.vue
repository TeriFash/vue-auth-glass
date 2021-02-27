<template>
  <div class="py-4 p-st contacts">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span class="title text-center">{{ title }}.</span>
      </div>
      <hr class="pg-line w-50" />
      <br />
      <div class="text-center">
        <div
          class="mb-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="text"
            name="user_name"
            v-model="name"
            placeholder="name"
            class="pinput"
            style="transition-delay: 0.2s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="email"
            class="pinput"
            style="transition-delay: 0.4s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <textarea
            name="message"
            v-model="text"
            placeholder="message"
            class="pinput"
            rows="4"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <div
          class="mt-1"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          <button @click.prevent="sendEmail" class="mt-1 btn btn-full mb-3">
            Send
          </button>
        </div>
      </div>

      <div class="flex flex-column align-items-center text-center py-4">
        <h6 class="pb-4">Message: {{ message }}</h6>
        <div class="flex w-50 py-2">
          <button class="btn mx-2 btn-full" @click="onLoadClick">
            <i class="fas fa-download mx-2"></i>
            load
          </button>
          <button class="btn mx-2 btn-full" @click="onClearClick">
            <i class="fas fa-trash-alt mx-2"></i>
            clear
          </button>
        </div>
      </div>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import config from '@/config'
import emailjs from 'emailjs-com'
import Snackbar from './helpers/Snackbar'
import info from '@/content'

export default {
  name: 'Contact',

  data() {
    return {
      email: '',
      name: '',
      text: '',
      message: '',
      showSnackbar: false,
      snackbarMessage: '',
      snackbarColor: '',
      title: info.sections.contact,
    }
  },
  components: {
    Snackbar,
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val
        }, 1000)
      }
    },
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true
        this.snackbarMessage = 'Please all the fields'
        this.snackbarColor = 'rgb(91, 93, 220)'
      } else {
        const obj = {
          user_email: this.email,
          from_name: this.name,
          message_html: this.text,
          to_name: 'Gura Viktor',
        }

        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            obj,
            config.emailjs.userID
          )
          .then(
            result => {
              this.showSnackbar = true
              this.snackbarMessage = 'Thanks! Message recieved.'
              this.snackbarColor = '#1aa260'

              this.email = ''
              this.text = ''
              this.name = ''
            },
            error => {
              this.showSnackbar = true
              this.snackbarMessage = 'Oops! Something went wrong.'
              this.snackbarColor = 'rgb(221, 63, 120)'
            }
          )
      }
    },
    loadMessage() {
      return new Promise(resolve => {
        setTimeout(() => resolve('Hello world!'), 3000)
      })
    },
    async onLoadClick() {
      this.$store.commit('SET_LOADING', true)
      this.message = await this.loadMessage()
      this.$store.commit('SET_LOADING', false)
    },
    onClearClick() {
      this.message = ''
    },
  },
}
</script>

<style lang="scss">
.contacts {
  // background: var(--bg-l-1);
}

.pinput {
  background: var(--bg-d-2);
  font-size: 18px;
  outline: none;
  border: 1px solid var(--bg-d-2);
  border-radius: 7px;
  padding: 10px;
  width: 70%;
  transition: all 0.5s;
  color: var(--color);

  &:focus {
    border: 1px solid var(--color-violet-d-1);
    border-radius: 7px;
  }

  &::placeholder {
    opacity: 0.5;
    color: inherit;
  }
}

.btn {
  width: 50%;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
}

@media screen and (max-width: 640px) {
  .btn {
    width: 90%;
  }
}
</style>

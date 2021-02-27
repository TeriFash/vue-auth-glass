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
      <hr width="50%" class="pg-line" />
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

        <div>
          <button
            @click.prevent="sendEmail"
            class="mt-1 btn mb-3"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            Send
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
  },
}
</script>

<style scoped lang="scss">
.contacts {
  background: var(--bg-l-1);
}

.pinput {
  background: var(--bg-l-2);
  font-size: 18px;
  outline: none;
  border: 1px solid var(--bg-l-2);
  border-radius: 7px;
  padding: 10px;
  width: 50%;
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
  width: 70%;
  background-color: var(--color-violet);
  color: var(--color-white);
  // transition: all 0.5s !important;

  &:hover,
  &:focus {
    color: var(--color-white);
  }
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }

  .btn {
    // width: 90%;
  }
}

@media screen and (max-width: 640px) {
  .btn {
    width: 90%;
  }
}
</style>

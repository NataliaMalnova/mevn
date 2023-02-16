<template>
  <div
    class="overlay overlay--menu"
    :class="{
      'overlay--show': visible,
    }"
    id="contact"
  >
    <div class="overlay-wrap">
      <div class="overlay-wrap--top">
        <div class="overlay--close d-flex f_just-end">
          <svg
            @click="$emit('close')"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.4722 29.6429L9.82422 9.99487"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="22.9256"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.4722 9.99482L9.82422 29.6428"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="22.9256"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="overlay-wrap--menu">
        <p @click="$emit('close')">
          <nuxt-link to="/about" class="big-text">Обо мне</nuxt-link>
        </p>

        <p @click="$emit('close')">
          <nuxt-link to="/parent" class="big-text" @click="$emit('close')"
            >Родителям</nuxt-link
          >
        </p>

        <p @click="$emit('close')">
          <nuxt-link to="/child" class="big-text" @click="$emit('close')"
            >Детям</nuxt-link
          >
        </p>

        <p @click="$emit('close')">
          <nuxt-link to="/" class="big-text" @click="$emit('close')"
            >Педагогам</nuxt-link
          >
        </p>

        <p @click="$emit('close')">
          <nuxt-link to="/photo" class="big-text" @click="$emit('close')"
            >Фотогалерея</nuxt-link
          >
        </p>
        <p @click="$emit('close')">
          <nuxt-link to="/competition-2022" class="small-text"
            >Конкурс</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    visible: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.default-layout .overlay {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: -1;
  opacity: 0;

  overflow: hidden;
  transition: 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    justify-content: flex-end;
  }

  &-wrap {
    width: 644px;
    background: linear-gradient(
      130.83deg,
      rgba(128, 129, 189, 0.8) 14.95%,
      rgba(128, 129, 189, 0.8) 79.77%
    );
    backdrop-filter: blur(30px);
    border-radius: 24px;
    padding: 40px;
    overflow: auto;
    transition: 0.6s;
    @media screen and (max-width: 991px) {
      width: 100%;
      max-width: 450px;
      height: 100%;
      padding: 16px;
      border-radius: 0px;
      display: flex;
      flex-direction: column;
      margin-right: -450px;
    }
  }

  &--close {
    cursor: pointer;
  }

  &-wrap--menu {
    display: flex;
    flex-direction: column;

    a {
      color: #fff;
    }

    p {
      width: 100%;
      padding-bottom: 16px;
      padding-top: 16px;
      border-bottom: 1px solid #fff;
    }

    .small-text {
      color: #fff;
    }
  }
}
.default-layout .overlay--show {
  opacity: 1;
  z-index: 999;

  .overlay-wrap {
    margin-right: 0px;
  }
  &-wrap {
    margin-right: 0;
  }
}
</style>
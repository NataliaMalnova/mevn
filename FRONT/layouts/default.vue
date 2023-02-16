<template>
  <div
    id="app"
    class="default-layout"
  >
    <Header
      @openMenu="openMenu()"
    />
    <Nuxt />
    <MenuModal :visible="isMenuOpen" @close="openMenu()" />
  </div>
</template>

<script>
import Header from "~/components/layout/Header.vue";
import MenuModal from "@/components/overlay/MenuModal.vue";

export default {
  components: {
    Header,
    MenuModal,
  },
  //middleware: "auth",
  head() {
    return {
      link: [
        { rel: "canonical", href: `http://localhost:3001${this.$route.path}` },
      ],
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: `http://localhost:3001${this.$route.path}`,
        },
      ],
    };
  },

  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss">
</style>

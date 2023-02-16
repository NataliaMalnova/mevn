<template>
  <div id="login" class="login-layout">
    <el-container :style="{ height: '100%' }">
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  middleware: "auth",

  head() {
    return {
      link: [
        { rel: "canonical", href: `http://localhost:3001${this.$route.path}` },
      ],
      meta: [
        {
          name: "robots",
          content: "noindex,nofollow",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.login-layout {
  max-width: 100%;
  min-height: 100vh;

  form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  button {
    width: 100%;
  }
}
</style>

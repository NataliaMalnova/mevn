<template>
  <div id="app" class="error-layout">Ошибка {{ error.statusCode }}</div>
</template>

<script>

export default {
  props: ["error"],
};
</script>

<style >
</style>

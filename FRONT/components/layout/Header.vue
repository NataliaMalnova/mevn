<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <nuxt-link to="/">Главная</nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <nuxt-link to="/cart">Корзина {{cartCount}}</nuxt-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  computed: {
    ...mapGetters({
      cartCount: 'category/cartCount'
    })
  },
  methods: {

  }
}
</script>

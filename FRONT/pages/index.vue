<template>
  <div>
    <el-row >
      <CategoryTable />
    </el-row>
    <el-row :gutter="20">

      <el-col :span="8"
              v-for="(product, key) in products.items"
              :key="key"
              :offset="key > 0 ? 2 : 0">
        <card
          :title="product.title"
          :price="product.price"
          :imageUrl="product.imageUrl"
          :category="product.category"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '@/components/Card'
import CategoryTable from '@/components/CategoryTable'

export default {
  name: "IndexPage",
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
        { hid: "og:title", property: "og:title", content: this.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
      ],
    };
  },
  data() {
    return {
      title: "Pet Project",
      description: "My pet project",
    };
  },

  components: {
    Card,
    CategoryTable
  },

  mounted() {
    this.fetchProducts();
  },

  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: "product/fetchProducts"
    })
  },



};
</script>

<style lang="scss">
</style>

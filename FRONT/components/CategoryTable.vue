<template>
  <div>
    <el-button type="primary" v-if="categories" v-for="(category, key) in categories.items" :key="key">{{category.title}}</el-button>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      tableData:  []
    }
  },

  mounted() {
   this.tableData = this.fetchCategories();
  },

  computed: {
    ...mapGetters({
      categories: 'category/categories'
    })
  },

  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories"
    }),
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

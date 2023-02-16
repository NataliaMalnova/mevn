 <template>
  <el-breadcrumb separator="/" class="mb">
    <el-breadcrumb-item
      v-for="item in breadcrumb"
      :key="item.name"
      :to="{ path: item.link }"
      >{{ item.name }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },

  props: {
    breadcrumb: Array,
  },
};
</script>
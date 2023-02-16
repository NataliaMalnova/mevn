<template>
        <el-card :body-style="{ padding: '0px' }">
          <img :src="imageUrl" class="image">
          <div style="padding: 14px;">
            <span>{{ title }} <el-tag size="mini" v-if="category">{{category}}</el-tag></span>
            <div class="bottom clearfix">
              <time class="time">{{ price }}</time>
              <el-button type="success">Купить</el-button>
            </div>
          </div>
        </el-card>
</template>

<script>

export default {
  name: "AppCard",
  props: {
    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    category: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    };
  },

  components: {

  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

span {
  display: flex;
  align-items: center;
}

.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

</style>

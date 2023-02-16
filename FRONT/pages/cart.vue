<template>
  <div class="cart-container">
    <ul>
      <li v-for="(item, key) in cartItems" :key="">
        {{item.name}} - {{item.price}}
      </li>
    </ul>
    <div class="panel">
      Quantity: {{cart.quantity}}
      Total: {{cart.total}}
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cart',
  data() {
    return {

    }
  },

  mounted() {

  },

  computed: {
  ...mapGetters({
    cartItems: 'cartItems',
    cart: 'cart'
  })
  },

  methods: {

  },
}
</script>

<style>

</style>

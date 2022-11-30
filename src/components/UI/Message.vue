<template>
  <section class="message" :class="{ active: status }">
    товар <span>{{ name }}</span> в количестве
    <span>{{ numStatic }}</span> единиц добавлен в
    <span v-if="addTo === 'basket'">корзину</span>
    <span v-else>избранное</span>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Message",
  data() {
    return {
      numStatic: null,
    };
  },
  watch: {
    status() {
      if (this.status) {
        this.numStatic = this.quantity; // если выводить количество напрямую, то во время появления окна можно менять количество
        setTimeout(this.addProduct, 1000);
      }
    },
  },
  methods: {
    ...mapActions({
      addProduct: "addProduct",
    }),
  },
  computed: {
    ...mapState({
      name: (state) => state.product.name,
      quantity: (state) => state.quantity,
      status: (state) => state.showMessage.status,
      addTo: (state) => state.showMessage.addTo,
    }),
  },
};
</script>

<style lang="scss" scoped>
.message {
  padding: 0px 5px;
  min-height: 40px;
  border: 1px solid #333333;
  z-index: 999;
  background-color: white;
  position: fixed;
  bottom: -30%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 20px;
  transition: all 0.3s ease 0s;
  span {
    font-weight: 700;
    font-size: inherit;
  }
}
.active {
  bottom: 0px;
}
</style>

<template>
  <section class="message" :class="{ active: status }">
    <span v-if="text === 'basket' || text === 'favorite'">
      товар <span class="bold">{{ name }}</span>
      <span v-if="text === 'basket'">
        в количестве <span class="bold">{{ numStatic }}</span> единиц добавлен в
        корзину</span
      >
      <span v-else> добавлен в избранное</span>
    </span>
    <span v-else>
      {{ text }}
    </span>
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
        setTimeout(this.showMessage, 1500);
      }
    },
  },
  methods: {
    ...mapActions({
      showMessage: "showMessage",
    }),
  },
  computed: {
    ...mapState({
      name: (state) => state.product.name,
      quantity: (state) => state.quantity,
      status: (state) => state.message.status,
      text: (state) => state.message.text,
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
    font-size: inherit;
  }
}
.bold {
  font-weight: 700;
  font-size: inherit;
}
.active {
  bottom: 0px;
}
</style>

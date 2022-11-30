<template>
  <span v-for="item of items" :key="item">
    <img
      v-if="rate >= item"
      src="../../assets/icons/starFill.svg"
      alt="star"
      class="star"
    />
    <img
      v-else
      src="../../assets/icons/starEmpty.svg"
      alt="star"
      class="star"
    />
  </span>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RateStar",
  data() {
    return {
      items: [1, 2, 3, 4, 5], //просто массив из 5 элементов
    };
  },
  computed: {
    ...mapState({
      rate: (state) => state.product.rate,
    }),
  },
};
</script>

<style lang="scss" scoped>
.star {
  width: 12px;
  height: 12px;
}
</style>

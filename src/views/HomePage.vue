<template>
  <Header />
  <div class="container"><ProductItem /></div>
</template>

<script>
import Header from "../components/Header.vue";
import ProductItem from "../components/ProductItem.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    ProductItem,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  padding: 0px 5px;
  margin: 0px auto;
}
</style>

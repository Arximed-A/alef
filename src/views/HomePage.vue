<template>
  <Header />
  <div class="container">
    <ProductItem />
    <Catalog />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ProductItem from "../components/ProductItem.vue";
import Catalog from "../components/Catalog.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    ProductItem,
    Catalog,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  padding: 40px 5px 70px;
  margin: 0px auto;
}
</style>

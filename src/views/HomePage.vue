<template>
  <Header />
  <div class="container">
    <ProductItem />
    <Catalog />
    <Footer />
  </div>
  <Message />
</template>

<script>
import Header from "../components/Header.vue";
import ProductItem from "../components/ProductItem.vue";
import Catalog from "../components/Catalog/Catalog.vue";
import Footer from "../components/Footer.vue";
import Message from "@/components/UI/Message.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    ProductItem,
    Catalog,
    Footer,
    Message,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  padding: 40px 5px 70px;
  margin: 0px auto;
  @media (max-width: 700px) {
    padding: 30px 0px 186px 0px;
  }
}
</style>

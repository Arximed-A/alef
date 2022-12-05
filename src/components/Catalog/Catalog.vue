<template>
  <section class="catalog">
    <h3 class="catalog__title">
      <a href="#">Посмотреть все стили</a>
    </h3>
    <div class="catalog__container">
      <div class="catalog__big-box">
        <CatalogItem :url="1" />
      </div>
      <div class="catalog__wrapper">
        <div
          class="catalog__box"
          v-for="item of catalogItems"
          :key="item.index"
        >
          <CatalogItem :url="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CatalogItem from "./CatalogItem.vue";
export default {
  components: { CatalogItem },
  name: "Catalog",
  computed: {
    ...mapState({
      catalogItems: (state) => state.catalogItems,
    }),
  },
};
</script>

<style lang="scss" scoped>
$md3: 500px;
.catalog {
  padding: 0px 0px 130px 0px;
  &__title {
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__container {
    display: flex;
    max-height: 688px;
  }
  &__big-box {
    flex: 0 0 686px / 1390px * 100%;
    margin: 0px 16px / 1390px * 100% 0px 0px;
    position: relative;
  }
  &__box {
    position: relative;
    flex: 0 1 335px / 686px * 100%;
    max-height: 336px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__wrapper {
    flex: 0 0 686px / 1390px * 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  @media (max-width: $md3) {
    padding: 0px 0px 30px 0px;
    &__container {
      flex-wrap: wrap;
      max-height: 100%;
    }
    &__title {
      height: 109px;
      margin: 0px 0px 13px 0px;
    }
    &__big-box {
      flex: 1 1 100%;
      margin: 0px 0px 8px 0px;
    }
    &__box {
      margin: 0px 0px 8px 0px;
      flex: 0 0 183px / 375px * 100%;
    }
    &__wrapper {
      flex: 1 1 100%;
    }
  }
}
</style>

<template>
  <section class="catalog">
    <h3 class="catalog__title">
      <a href="#">Посмотреть все стили</a>
    </h3>
    <div class="catalog__container">
      <img
        src="../assets/img/catalog/1.jpg"
        alt="child with toy"
        class="catalog__big-photo"
      />
      <div class="catalog__wrapper">
        <img
          src="../assets/img/catalog/2.jpg"
          alt="child with toy"
          class="catalog__photo"
        />
        <img
          src="../assets/img/catalog/2.jpg"
          alt="child with toy"
          class="catalog__photo"
        />
        <img
          src="../assets/img/catalog/2.jpg"
          alt="child with toy"
          class="catalog__photo"
        />
        <img
          src="../assets/img/catalog/2.jpg"
          alt="child with toy"
          class="catalog__photo"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Catalog",
};
</script>

<style lang="scss" scoped>
.catalog {
  padding: 0px 0px 130px 0px;
  &__title {
    height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__container {
    display: flex;
    height: 688px;
    justify-content: space-between;
  }
  &__big-photo {
    flex: 0 0 686px;

    object-fit: cover;
  }
  &__wrapper {
    flex: 0 0 686px;
    display: flex;
    flex-wrap: wrap;
  }
  &__photo {
    flex: 0 0 335px;
  }
}
</style>

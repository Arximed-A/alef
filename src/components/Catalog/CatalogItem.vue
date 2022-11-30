<template>
  <a href="#" class="full-screen">
    <div class="full-screen__header">
      <img
        src="../../assets/icons/fullScreen.svg"
        alt=""
        class="full-screen__full-screen"
      />
    </div>
    <div class="full-screen__body">
      <img
        src="../../assets/icons/basketWhite.svg"
        alt=""
        class="full-screen__basket"
      />
      <span class="full-screen__text"> Узнай, что на мне </span>
    </div>
    <div class="full-screen__footer">
      <img
        src="../../assets/icons/heartFull.svg"
        alt=""
        class="full-screen__heart"
      />
      <span class="full-screen__text">200</span>
    </div>
  </a>
  <img
    :src="require(`../../assets/img/catalog/${url}.jpg`)"
    alt=""
    class="full-screen__img"
  />
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    url: Number,
  },
};
</script>

<style lang="scss" scoped>
$md2: 900px;
$md3: 500px;
.full-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333333;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &__img {
    width: 100%;
    height: 100%;
    display: block;
  }
  &:hover {
    opacity: 0.7;
  }
  &__header {
    align-self: flex-end;
  }
  &__full-screen {
    margin: 12px 12px 0px 0px;
    height: 24px;
    width: 24px;
    @media (max-width: $md2) {
      margin: 0px 0px 0px 0px;
    }
  }
  &__body {
  }
  &__basket {
    display: block;
    margin: 0px auto;
    width: 48px;
    height: 48px;
  }
  &__text {
    color: #ffffff;
    @media (max-width: $md2) {
      font-size: 12px;
    }
    @media (max-width: $md3) {
      font-size: 14px;
    }
  }
  &__footer {
    margin: 0px 0px 16px 0px;
    display: flex;
  }
  &__heart {
    margin: 0px 2px 0px 0px;
    height: 24px;
    width: 24px;
  }
}
</style>

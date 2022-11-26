<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">logo</div>
      <!-- возможно подразумивается картинка  -->
      <a href="#" class="header__link">
        <img src="../assets/icons/user.svg" alt="user" class="header__img" />
      </a>
      <a href="#" class="header__link">
        <img
          src="../assets/icons/favorite.svg"
          alt="favorite"
          class="header__img"
        />
      </a>
      <a href="#" class="header__link">
        <img
          src="../assets/icons/basket.svg"
          alt="basket"
          class="header__img"
        />
      </a>
      <!-- 
      <a @click="showMenu" class="header__link menu">
        <span class="menu__line" :class="{ menu__active: activeMenu }"></span>
        <span class="menu__line" :class="{ menu__active: activeMenu }"></span>
        <span class="menu__line" :class="{ menu__active: activeMenu }"></span>
      </a>
			 --></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.activeMenu = !this.activeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 4px 0px #0000001a;
  &__container {
    max-width: 1400px;
    padding: 0px 5px;
    margin: 0px auto;
    height: 40px;
    display: flex;
    align-items: center;
  }
  &__logo {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22px;
    flex: 1 1 auto;
  }
  &__link {
    margin: 0px 24px 0px 0px;
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      margin: 0px 0px 0px 0px;
      // ! РАЗОБРАТЬСЯ !!!!
    }
  }
  &__img {
    height: 16px;
    width: 16px;
  }
}
.menu {
  display: none;
  cursor: pointer;
  position: relative;
  &__line {
    position: absolute;
    background-color: #333333;
    height: 1px;
    width: 18px;
    top: 11px;
    left: 3px;
    transition: all 0.3s ease 0s;
    &:first-child {
      top: 5px;
    }
    &:last-child {
      top: 17px;
    }
  }
  &__active {
    transform: scale(0);
    &:first-child {
      transform: rotate(-45deg);
      top: 11px;
    }
    &:last-child {
      transform: rotate(45deg);
      top: 11px;
    }
  }
}
</style>

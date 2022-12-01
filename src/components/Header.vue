<template>
  <header class="header" :class="{ hide: scrollY }">
    <div class="header__container">
      <span class="header__logo">logo</span>

      <nav class="header__wrapper">
        <a href="#" class="header__link">
          <img src="../assets/icons/user.svg" alt="user" class="header__img" />
        </a>
        <a href="#" class="header__link">
          <img
            src="../assets/icons/heartBlack.svg"
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
      </nav>

      <a class="icon-menu" ref="iconMenu" @click="toggleMenu" data-menu="menu">
        <span
          class="icon-menu__line"
          data-menu="menu"
          :class="{ active: activeMenu }"
        ></span>
        <span
          class="icon-menu__line"
          data-menu="menu"
          :class="{ active: activeMenu }"
        ></span>
        <span
          class="icon-menu__line"
          data-menu="menu"
          :class="{ active: activeMenu }"
        ></span>
      </a>
      <menu class="header__menu menu" v-if="activeMenu" data-menu="menu">
        <li class="menu__item">
          <a href="#" class="menu__link">постельное белье</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">одежда для дома</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Одежда для улицы</a>
        </li>
        <li class="menu__item"><a href="#" class="menu__link">Выход</a></li>
      </menu>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeMenu: false,
      scrollY: null,
      focusMenu: true,
    };
  },
  watch: {
    activeMenu() {
      if (this.activeMenu) {
        document.addEventListener("click", this.clickOutsideMenu);
      } else {
        document.removeEventListener("click", this.clickOutsideMenu);
      }
    },
  },
  methods: {
    clickOutsideMenu(event) {
      if (event.target.dataset.menu !== "menu") {
        this.activeMenu = false;
      }
    },
    listenScrollY() {
      this.scrollY = window.pageYOffset;
      //присваиваем значение скрола
    },
    toggleMenu() {
      this.activeMenu = !this.activeMenu;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.listenScrollY);
  },
};
</script>

<style lang="scss" scoped>
$md3: 500px;
.hide {
  top: -50px !important;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 0px 2px 4px 0px #0000001a;
  z-index: 999;
  transition: all 0.3s ease 0s;
  &__container {
    height: 40px;
    max-width: 1400px;
    padding: 0px 5px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    @media (max-width: $md3) {
      height: 30px;
      padding: 0px 20px;
    }
  }
  &__logo {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22px;
    flex: 1 1 auto;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: $md3) {
      margin: 0px 24px 0px 0px;
    }
  }
  &__link {
    margin: 0px 24px 0px 0px;
    &:last-child {
      margin: 0px 0px 0px 0px;
    }
  }
  &__menu {
  }
  &__img {
    height: 24px;
    width: 24px;
  }
}
.menu {
  position: fixed;
  background: white;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  height: 277px;
  padding: 80px 0px 43px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__item {
    font-size: 12px;
    text-transform: uppercase;
    margin: 0px 0px 30px 0px;
    &:last-child {
      margin: 0;
    }
  }
}
.icon-menu {
  display: none;
  height: 24px;
  width: 24px;
  position: relative;
  z-index: 3;
  cursor: pointer;
  @media (max-width: $md3) {
    display: block;
  }
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
}
.active {
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
</style>

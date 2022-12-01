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

      <a
        class="icon-menu"
        @focus="openMenu"
        tabindex="0"
        @focusout="closeMenu"
        ref="iconMenu"
      >
        <div class="icon-menu__wrapper">
          <span class="icon-menu__line"></span>
          <span class="icon-menu__line"></span>
          <span class="icon-menu__line"></span>
        </div>
        <menu class="header__menu menu" v-if="activeMenu" data-menu="menu">
          <div class="menu__wrapper" @click="closeMenu">
            <span class="menu__line active"></span>
            <span class="menu__line active"></span>
            <span class="menu__line active"></span>
          </div>
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
      </a>
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

  methods: {
    listenScrollY() {
      this.scrollY = window.pageYOffset;
      //присваиваем значение скрола
    },
    openMenu() {
      this.activeMenu = true;
    },
    closeMenu() {
      this.activeMenu = false;
      this.$refs.iconMenu.blur(); //снимаем фокус с меню
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
  transition: all 0.3s ease 0s;
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
  &__wrapper {
    cursor: pointer;
    height: 24px;
    width: 24px;
    position: fixed;
    right: 20px;
    top: 3px;
    z-index: 3;
  }
  &__line {
    position: absolute;
    background-color: #333333;
    height: 1px;
    width: 18px;
    top: 11px;
    left: 3px;
    &:first-child {
      top: 5px;
    }
    &:last-child {
      top: 17px;
    }
  }

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

  @media (max-width: $md3) {
    display: block;
  }
  &__wrapper {
    position: relative;
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  &__line {
    position: absolute;
    background-color: #333333;
    height: 1px;
    width: 18px;
    top: 11px;
    left: 3px;
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

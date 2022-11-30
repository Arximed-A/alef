<template>
  <footer class="footer">
    <div class="footer__column">
      <span class="footer__title">Покупателям</span>
      <a href="#" class="footer__link">Каталог</a>
      <a href="#" class="footer__link">Акции</a>
      <a href="#" class="footer__link">Бренды</a>
    </div>
    <div class="footer__column">
      <span class="footer__title">О нас</span>
      <a href="#" class="footer__link">О компании</a>
      <a href="#" class="footer__link">Новости</a>
      <a href="#" class="footer__link">Команда</a>
    </div>
    <div class="footer__column footer__column_big">
      <span class="footer__title footer__title_big"
        >Узнайте первыми о новинках и акциях</span
      >
      <label for="email" class="footer__wrapper">
        <input
          type="email"
          id="email"
          class="footer__inp"
          placeholder="Адрес электронной почты"
          v-model.trim="email"
          :class="{ error: errorEmail }"
        />
        <div class="footer__delete" @click="deleteEmail">
          <span class="footer__line"></span>
          <span class="footer__line"></span>
        </div>
      </label>
      <button class="footer__button" @click="checkEmail(email)">
        Подписаться
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: null,
      errorEmail: null,
    };
  },
  methods: {
    checkEmail(email) {
      const rule =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu; // регулярное выражение
      const result = rule.test(String(email).toLowerCase()); //возращает истину, если проходит проверку
      if (result) {
        this.errorEmail = false;
      } else {
        this.errorEmail = true;
      }
    },
    deleteEmail() {
      this.errorEmail = false;
      this.email = null;
    },
  },
};
</script>

<style lang="scss" scoped>
$md1: 1390px;
$md2: 900px;
$md3: 500px;
.footer {
  display: flex;
  padding: 12px 117px / 1390px * 100% 0;
  flex-wrap: wrap;
  &__column {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &_big {
      flex: 0 1 454px;
      align-items: stretch;
    }
  }
  &__title {
    text-transform: uppercase;
    font-size: 16px;
    margin: 0px 0px 19px 0px;
  }
  &__link {
    text-decoration: none;
    margin: 0px 0px 8px 0px;
    &:last-child {
      margin: 0px 0px 0px 0px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  &__wrapper {
    position: relative;
  }
  &__inp {
    border: none;
    border-bottom: 1px solid #c4c4c4;
    width: 100%;
    margin: 15px 0px 0px 0px;
    padding: 0px 16px;
    height: 44px;
    outline: none;
  }
  &__delete {
    cursor: pointer;
    width: 12px;
    height: 12px;
  }
  &__line {
    position: absolute;
    right: 10px;
    top: 50%;
    height: 1px;
    width: 12px;
    background: #c4c4c4;
    &:first-child {
      transform: rotate(-45deg);
    }
    &:last-child {
      transform: rotate(45deg);
    }
  }
  &__button {
    cursor: pointer;
    margin: 23px 0px 0px 0px;
    background: inherit;
    align-self: flex-end;
    border: 1px solid #333333;
    border-radius: 0;
    width: 152px;
    height: 36px;
  }
  @media (max-width: 1000px) {
    padding: 19px 20px 0;
    &__button {
      margin: 13px 0px 0px 0px;
    }
    &__line {
      top: 40%;
    }
    &__inp {
      margin: 0px 0px 0px 0px;
    }
    &__title_big {
      padding: 0px 20% 0px 0px;
    }
    &__column {
      margin: 0px 0px 60px 0px;
      &_big {
        flex: 1 1 100%;
        margin: 0px 0px 0px -2px;
      }
    }
  }
}
.error {
  border: 1px solid rgb(170, 9, 9);
}
</style>

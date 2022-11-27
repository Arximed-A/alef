<template>
  <footer class="footer">
    <div class="footer__column">
      <span class="footer__title">Покупателям</span>
      <a href="#" class="footer__text">Каталог</a>
      <a href="#" class="footer__text">Акции</a>
      <a href="#" class="footer__text">Бренды</a>
    </div>
    <div class="footer__column">
      <span class="footer__title">О нас</span>
      <a href="#" class="footer__text">О компании</a>
      <a href="#" class="footer__text">Новости</a>
      <a href="#" class="footer__text">Команда</a>
    </div>
    <div class="footer__column">
      <span class="footer__title">Узнайте первыми о новинках и акциях</span>
      <label for="email" class="footer__wrapper">
        <input
          type="email"
          id="email"
          class="footer__inp"
          placeholder="Адрес электронной почты"
          @change="checkEmail(email)"
          v-model.trim="email"
        />
        <!-- ПРОВЕРИТЬ!!!!!!!!!!!!!!!!!!!! 
				 :class="{ error: !validEmail, valid: validEmail }"
				-->
        <div class="footer__delete">
          <span class="footer__line"></span>
          <span class="footer__line"></span>
        </div>
      </label>
      <button class="footer__button">Подписаться</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: null,
      validEmail: null,
    };
  },
  methods: {
    checkEmail(email) {
      const rule =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu; // регулярное выражение
      const result = rule.test(String(email).toLowerCase()); //возращает истину, если проходит проверку
      if (result) {
        this.validEmail = true;
      } else {
        this.validEmail = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 184px;
  display: flex;
  padding: 0px 122px;
  &__column {
    display: flex;
    flex-direction: column;
    flex: 1 1 335px;
    &:last-child {
      flex: 1 1 452px;
      // align-items: flex-end;
    }
    // поправить размер ссылок
  }
  &__title {
    text-transform: uppercase;
    font-size: 16px;
    margin: 0px 0px 16px 0px;
  }
  &__text {
    text-decoration: none;
    margin: 0px 0px 8px 0px;
    &:last-child {
      margin: 0px 0px 0px 0px;
    }
  }
  &__wrapper {
    position: relative;
  }
  &__inp {
    border: none;
    border-bottom: 1px solid #c4c4c4;
    width: 100%;
    padding: 0px 16px;
    height: 44px;
    outline: none;
  }
  &__delete {
  }
  &__line {
    position: absolute;
    right: 0;
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
    margin: 35px 0px 0px 0px;
    align-self: flex-end;
    border: 1px solid #333333;
    border-radius: 0;
    width: 150px;
    height: 44px;
  }
}
.error {
  border-bottom: 1px solid rgb(170, 9, 9);
}
.valid {
  border-bottom: 1px solid rgb(0, 128, 68);
}
</style>

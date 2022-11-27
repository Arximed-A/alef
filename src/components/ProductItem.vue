<template>
  <section class="product">
    <div class="product__images images">
      <img
        :src="require(`../assets/img/pajamas/${urlMainImg}.jpg`)"
        alt=""
        class="images__main"
      />
      <!-- значения :key лучше не присваивать от index массива, но тут можно) -->
      <ul class="images__list">
        <li class="images__item" v-for="item of items" :key="item.index">
          <img
            @click="changePhoto(item)"
            :src="require(`../assets/img/pajamas/${item}.jpg`)"
            alt="photo preview"
            class="images__img"
            :class="{ images__active: item === urlMainImg }"
          />
        </li>
      </ul>
    </div>
    <div class="product__about about">
      <h2 class="about__title">{{ name }}</h2>

      <div class="about__article">Арт. {{ article }}</div>

      <div class="about__review review">
        Отзывы
        <span class="review__wrapper">
          <RateStar />
        </span>
        {{ review }} отзывов
        <img
          src="../assets/icons/arrow.svg"
          alt="arrow"
          class="review__img arrow"
        />
      </div>

      <div class="about__cost cost">
        <div class="cost__wrapper">
          <span class="cost__summ">{{ cost }} ₽</span>
          <span class="cost__first-summ">{{ firstCost }} ₽</span>
          <img
            src="../assets/icons/arrow.svg"
            alt="arrow"
            class="cost__img arrow"
          />
        </div>
        <div class="cost__discount discount">
          <div class="discount__item">скидка -36%</div>
          <div class="discount__item">акция -20%</div>
        </div>
      </div>

      <div class="about__size size">
        <select name="size" required class="size__select">
          <option>Выбрать размер</option>
          <option>L</option>
        </select>
        <a href="#" class="size__link">Определить размер</a>
      </div>

      <div class="about__buy buy">
        <div class="buy__wrapper">
          <div class="buy__quantity">
            <button class="buy__change" @click="changeQuantity(1)">+</button>
            <button class="buy__change">{{ quantity }}</button>
            <button class="buy__change" @click="changeQuantity(0)">-</button>
          </div>
          <div class="buy__buttons">
            <button class="buy__add btn">Добавить в корзину</button>
            <button class="buy__add buy__add_favourite btn">
              <img
                src="../assets/icons/heartWhite.svg"
                alt=""
                class="buy__img"
              />
            </button>
          </div>
        </div>
        <a href="#" class="buy__link">Купить в 1 клик</a>
      </div>

      <div class="about__more more">
        <a href="#" class="more__item">
          <img src="../assets/icons/closes.svg" alt="" class="more__img" />
          Описание товара
        </a>
        <a href="#" class="more__item">
          <img src="../assets/icons/clock.svg" alt="" class="more__img" />
          Доставка и возврат
        </a>
        <a href="#" class="more__item">
          <img src="../assets/icons/pay.svg" alt="" class="more__img" />
          Способы оплаты
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RateStar from "./UI/RateStar.vue";
export default {
  name: "ProductItem",
  components: {
    RateStar,
  },
  data() {
    return {
      name: null,
      article: null,
      review: null,
      cost: null,
      firstCost: null,
      items: null,
      urlMainImg: 1,
      urlImg: "./../assets/img/pajamas/1.jpg",
    };
  },
  methods: {
    changePhoto(id) {
      this.urlMainImg = id;
    },
    ...mapActions({
      changeQuantity: "changeQuantity",
    }),
  },
  computed: {
    ...mapState({
      product: (state) => state.product,
      quantity: (state) => state.quantity,
    }),
  },
  mounted() {
    const { name, id, review, cost, firstCost, imgList } = this.product;
    this.name = name;
    this.article = id;
    this.review = review;
    this.cost = cost;
    this.firstCost = firstCost;
    this.items = imgList;
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  padding: 26px 0px 0px 0px;
  &__images {
    margin: 0px 16px 0px 0px;
    flex: 0 1 686px / 1400px * 100%;
  }
  &__about {
    flex: 1 1 686px;
  }
}

.images {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__main {
    object-fit: cover;
    // width: 100%;
  }

  &__list {
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    flex-direction: column;
  }
  &__item {
    list-style-type: none;
  }
  &__img {
    opacity: 0.7;
    // по хорошему использовать это свойство object-fit: cover; что бы фото центровались, но тогда они некрасиво сжимаются
    width: 70px;
    height: 91px;
    margin: 0px 0px 7px 0px;
    cursor: pointer;
  }
  &__active {
    opacity: 1;
  }
}

.about {
  &__title {
    font-size: 18px;
    font-weight: 600;
    margin: 22px 0px 8px 20px;
    letter-spacing: 0;
  }
  &__article {
    color: #828282;
    font-size: 12px;
    margin: 0px 0px 17px 20px;
  }
  &__review {
    margin: 0px 0px 42px 20px;
  }
  &__cost {
    margin: 0px 0px 32px 20px;
  }
  &__size {
    margin: 0px 0px 40px 20px;
  }
  &__buy {
    margin: 0px 0px 24px 0px;
  }
  &__more {
    margin: 0px 0px 0px 20px;
  }
}
.review {
  display: flex;
  align-items: center;
  &__wrapper {
    margin: 0px 4px 0px 10px;
  }
  &__img {
    margin: 0px 0px 0px 4px;
  }
}
.cost {
  &__wrapper {
    display: flex;
    align-items: center;
    margin: 0px 0px 8px 0px;
  }
  &__summ {
    font-size: 24px;
    font-weight: 700;
    margin: 0px 12px 0px 0px;
  }
  &__first-summ {
    margin: 0px 16px 0px 0px;
    color: #828282;
    text-decoration: line-through; // на макете линия уже
  }
  &__discount {
  }
}
.discount {
  display: flex;
  &__item {
    border: 1px solid #333333;
    height: 24px;
    margin: 0px 9px 0px 0px; //подгонял под макет
    font-size: 12px;
    padding: 4px 7px;
    letter-spacing: 0.04em;
    &:last-child {
      margin: 0px 0px 0px 0px;
    }
  }
}
.size {
  &__select {
    display: block;
    margin: 0px 0px 12px 0px;
    border: 1px solid #333333;
    border-radius: 0;
    width: 315px;
    height: 44px;
    padding: 0px 0px 0px 10px;
    outline: none;
  }
  &__link {
  }
}
.buy {
  border-bottom: 1px solid #c4c4c4;
  padding: 0px 0px 29px 20px;
  &__wrapper {
    display: flex;
    margin: 0px 0px 13px 0px;
  }
  &__quantity {
    margin: 0px 12px 0px 0px;
    flex: 0 0 145px;
    display: flex;
    align-items: center;
  }
  &__change {
    flex: 1 1 auto;
    height: 44px;
    width: 48px;
    display: inline-block;
    text-align: center;
    border: none;
    cursor: pointer;
    // background-color: inherit;
  }
  &__buttons {
    display: flex;
  }
  &__add {
    margin: 0px 4px 0px 0px;
    padding: 0px 27px;
    flex: 0 0 auto;
    // разделить классы
    //========================================================================================================================================================

    &_favourite {
      padding: 0px 0px 0px 0px;
      flex: 0 0 44px;
    }
  }
  &__img {
    width: 16px;
    height: 16px;
  }
  &__link {
  }
}
.btn {
  display: block;
  height: 44px;
  border-radius: 0;
  border: 1px solid #333333;
  background: #333333;
  color: #ffffff;
  cursor: pointer;
}
.arrow {
  width: 16px;
  height: 16px;
}
.more {
  display: inline-flex;
  flex-direction: column;
  &__item {
    display: flex;
    align-items: center;
    margin: 0px 0px 12px 0px;
  }

  &__img {
    height: 20px;
    width: 20px;
    margin: 0px 3px 0px 0px;
  }
}
</style>

<template>
  <section class="product">
    <div class="product__images images">
      <div class="images__wrapper">
        <img
          :src="require(`../assets/img/pajamas/${urlMainImg}.jpg`)"
          alt=""
          class="images__main"
        />
      </div>
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
        <div class="size__container">
          <input
            type="text"
            class="size__select"
            v-model="size"
            @click="showSizeList"
            readonly
          />
          <img
            src="../assets/icons/arrow.svg"
            alt=""
            class="size__img"
            @click="showSizeList"
            :class="{ size__img_active: sizeList }"
          />
          <!-- в всплывающем меню не стал реализовать закрытие вне области, т.к. считаю что моё решение по закрытии меню хоть и рабочее, но явно нужно сделать по другому. Когда сделаю, запушу ветку дополнительную в мэйн-->
          <div class="size__wrapper" v-show="sizeList">
            <ul class="size__list" v-for="item of sizeItems" :key="item.index">
              <li class="size__item" @click="selectSize(item)">{{ item }}</li>
            </ul>
          </div>
        </div>
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
            <button class="buy__add btn" @click="addProduct('basket')">
              Добавить в корзину
            </button>
            <button
              class="buy__add buy__favourite btn"
              @click="addProduct('favorite')"
            >
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
      size: "Выбрать размер",
      sizeList: false,
      sizeItems: null,
    };
  },
  methods: {
    changePhoto(id) {
      this.urlMainImg = id;
    },
    showSizeList() {
      this.sizeList = !this.sizeList;
    },
    selectSize(size) {
      this.size = size;
      this.sizeList = false;
    },
    ...mapActions({
      changeQuantity: "changeQuantity",
      addProduct: "addProduct",
    }),
  },
  computed: {
    ...mapState({
      product: (state) => state.product,
      quantity: (state) => state.quantity,
    }),
  },
  mounted() {
    const { name, id, review, cost, firstCost, imgList, allowSize } =
      this.product;
    this.name = name;
    this.article = id;
    this.review = review;
    this.cost = cost;
    this.firstCost = firstCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); //добавляем пробелы
    this.items = imgList;
    this.sizeItems = allowSize;
  },
};
</script>

<style lang="scss" scoped>
$md2: 900px;
$md3: 500px;
$md4: 374px;

.product {
  display: flex;
  padding: 26px 0px 0px 0px;
  &__images {
    margin: 0px 16px 0px 0px;
    flex: 0 0 686px / 1390px * 100%;
    height: 878px;
    overflow: hidden;
  }
  &__about {
    flex: 0 0 686px / 1390px * 100%;
  }
  @media (max-width: $md2) {
    flex-wrap: wrap;
    &__images {
      flex: 1 1 100%;
      margin: 0px 0px;
      height: 600px;
    }
    &__about {
      flex: 1 1 100%;
    }
  }
  @media (max-width: $md3) {
    &__images {
      height: 480px;
    }
  }
}

.images {
  position: relative;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
  }
  &__main {
    object-fit: cover;
    max-width: 100%;
    display: block;
  }
  &__list {
    position: absolute;
    top: 24px;
    left: 23px;
    display: flex;
    flex-direction: column;
  }
  &__item {
  }
  &__img {
    opacity: 0.7;
    width: 70px;
    height: 91px;
    margin: 0px 0px 3px 0px;
    cursor: pointer;
    @media (max-width: $md3) {
      width: 40px;
      height: 52px;
      margin: 0px 0px 0px 0px;
    }
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
    text-decoration: line-through;
  }
  &__discount {
  }
}
.discount {
  display: flex;
  &__item {
    border: 1px solid #333333;
    height: 24px;
    margin: 0px 9px 0px 0px;
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
    width: 100%;
    height: 44px;
    padding: 0px 0px 0px 10px;
    outline: none;
    cursor: pointer;
    @media (max-width: $md4) {
      width: 100%;
    }
  }
  &__container {
    position: relative;
    max-width: 315px;
    margin: 0px 40px 0px 0px;
  }
  &__wrapper {
    position: absolute;
    top: 44px;
    left: 0;
    border: 1px solid #333333;
    border-top: none;
    background: white;
    width: 315px;
  }
  &__list {
  }
  &__item {
    padding: 0px 0px 0px 10px;
    height: 44px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      background: #3333332c;
    }
  }
  &__link {
  }
  &__img {
    cursor: pointer;
    position: absolute;
    right: 13px;
    top: 14px;
    transform: rotate(90deg);
    transition: all 0.3s ease 0s;
    &_active {
      transform: rotate(-90deg);
    }
  }
}

.buy {
  border-bottom: 1px solid #c4c4c4;
  padding: 0px 0px 29px 20px;
  &__wrapper {
    display: flex;
    margin: 0px 0px 13px 0px;
    @media (max-width: $md2) {
      flex-wrap: wrap;
    }
    @media (max-width: $md3) {
      margin: 0px 0px 22px 0px;
    }
  }
  &__quantity {
    background: #f2f2f2;
    margin: 0px 12px 0px 0px;
    flex: 0 0 145px;
    display: flex;
    align-items: center;
    @media (max-width: $md2) {
      margin: 0px 12px 15px 0px;
    }
  }
  &__change {
    flex: 1 1 auto;
    height: 44px;
    width: 48px;
    display: inline-block;
    text-align: center;
    border: none;
    cursor: pointer;
  }
  &__buttons {
    display: flex;
    margin: 0px 20px 0px 0px;
  }
  &__add {
    margin: 0px 4px 0px 0px;
    padding: 0px 27px;
    flex: 0 0 auto;
  }
  &__favourite {
    padding: 0px 0px 0px 0px;
    flex: 0 0 44px;
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

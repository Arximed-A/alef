import { createStore } from "vuex";

export default createStore({
  state: {
    product: {
      id: "02765/46",
      cost: 800,
      firstCost: "1 500", //лучше добавить маску для разделения
      review: 14,
      evaluation: 4,
      name: "Пижама для девочек",
      imgList: [1, 2, 3, 4, 5],
    },
    quantity: 1,
  },
  getters: {},
  mutations: {
    increaseQuantity(state) {
      state.quantity += 1;
    },
    decreaseQuantity(state) {
      state.quantity -= 1;
    },
  },
  actions: {
    changeQuantity({ commit }, action) {
      if (action) {
        commit("increaseQuantity");
      } else if (this.state.quantity !== 1) {
        commit("decreaseQuantity");
      }
    },
  },
  modules: {},
});

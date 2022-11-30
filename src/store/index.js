import { createStore } from "vuex";

export default createStore({
  state: {
    product: {
      id: "02765/46",
      cost: 800,
      firstCost: 1500,
      review: 14,
      rate: 4,
      name: "Пижама для девочек",
      imgList: [1, 2, 3, 4, 5],
      allowSize: [50, 56, 62, 68, 74, 80, 86],
    },
    quantity: 1,
    catalogItems: [2, 3, 4, 5],
    showMessage: { status: false, addTo: null },
  },
  getters: {},
  mutations: {
    increaseQuantity(state) {
      state.quantity += 1;
    },
    decreaseQuantity(state) {
      state.quantity -= 1;
    },
    showMessage(state, payload) {
      state.showMessage.status = payload.status;
      state.showMessage.addTo = payload.addTo;
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
    addProduct({ commit }, addTo) {
      if (addTo === "basket") {
        commit({ type: "showMessage", status: true, addTo });
      } else if (addTo === "favorite") {
        commit({ type: "showMessage", status: true, addTo });
      } else {
        commit("showMessage", false);
      }
    },
  },
  modules: {},
});

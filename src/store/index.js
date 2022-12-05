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
    message: { status: false, text: null },
  },
  getters: {},
  mutations: {
    increaseQuantity(state) {
      state.quantity += 1;
    },
    decreaseQuantity(state) {
      state.quantity -= 1;
    },
    createMessage(state, message) {
      if (message.status) {
        state.message.status = message.status;
        state.message.text = message.text;
      } else {
        state.message.status = false;
      }
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
    showMessage({ commit }, elem) {
      if (elem?.goal === "basket") {
        commit({ type: "createMessage", status: true, text: elem.goal });
      } else if (elem?.goal === "favorite") {
        commit({ type: "createMessage", status: true, text: elem.goal });
      } else if (elem?.goal === "text") {
        commit({ type: "createMessage", status: true, text: elem.text });
      } else {
        commit("createMessage", false);
      }
    },
  },
  modules: {},
});

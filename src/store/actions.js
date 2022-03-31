import Vue from "vue";

export const setTradeResult = ({state, commit}, tradeResult) => {
  commit("updateTradeResult", tradeResult);
  let tradeData = {
    purchase: state.purchase,
    sale: state.sale
  }
  Vue.http.put("https://product-operations-2dcd6-default-rtdb.firebaseio.com/trade-result.json", tradeData)
    .then(response => {
    })
}
export const getTradeResult = ({commit}) => {

  Vue.http.get("https://product-operations-2dcd6-default-rtdb.firebaseio.com/trade-result.json")
    .then(response => {
      console.log(response);
      commit("updateTradeResult", response.body)
    })
}

import { store } from "quasar/wrappers";

export function SET_LOGIN(store, payload) {
  store.login = payload
}
export function SET_CATEGORY(store, payload) {
  store.category = payload.category;
}
export function ADD_TO_CART(store, payload) {
  store.cart.push(payload) 
}
export function DELETE_FROM_CART(store, payload){
  store.cart.splice(payload, 1)
}

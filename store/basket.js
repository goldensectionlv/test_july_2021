
export const state = () => ({
  basket_active: false
})

export const getters = {
  basket_active: state => state.basket_active
}

export const mutations = {
  switchBasket: (state, action) => state.basket_active = action
}

export const actions = {
  switchBasket: ({commit}, action= false) => commit('switchBasket', action)
}

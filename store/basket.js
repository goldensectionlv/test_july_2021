
export const state = () => ({
  basket_active: false,
  basket_list: []
})

export const getters = {
  basket_active: state => state.basket_active,
  basket_list: state => state.basket_list
}

export const mutations = {
  switchBasket: (state, action) => state.basket_active = action,
  addToBasket(state, product) {
    let isInCart = false
    state.basket_list.map((item) => {
      if (item.id === product.id) {
        isInCart = true
        item.quantity++
      }
    })
    if (!isInCart) {
      // создаем новую отдельную копию обьекта, чтобы добавить новое поле и не изменить обьект из массива
      let new_cart_product = JSON.parse(JSON.stringify(product));
      new_cart_product.quantity = 1
      state.basket_list.push(new_cart_product)
    }
    localStorage.removeItem('basket_data')
    localStorage.setItem('basket_data', JSON.stringify(state.basket_list))
    console.log(state.basket_list)
  },

  deleteFromBasket(state, index) {
    if (state.basket_list[index].quantity > 1) state.basket_list[index].quantity -= 1
    else  state.basket_list.splice(index, 1)

    localStorage.removeItem('basket_data')
    localStorage.setItem('basket_data', JSON.stringify(state.basket_list))
  },
  localStorageRequest(state) {
    let data = localStorage.getItem('basket_data')
    if (data !== null) state.basket_list = JSON.parse(data)
    else state.basket_list = []
  }
}

export const actions = {
  switchBasket: ({commit}, action= false) => commit('switchBasket', action),
  addToBasket: ({commit}, product) => commit('addToBasket', product),
  deleteFromBasket: ({commit}, index) => commit('deleteFromBasket', index),
  localStorageRequest: ({commit}) => commit('localStorageRequest')
}

import api_requests from "~/store/api_requests";

export const state = () => ({
  products: [],
})

export const getters = {
  products: state => state.products,
}

export const mutations = {
  get_products: (state, products) => state.products = products,

  filter_by(state, option) {
    if (option === 'id') state.products.sort((a, b) => a.id - b.id)
    else if (option === 'цене') state.products.sort((a, b) => a.price - b.price)
    else if (option === 'популярности') state.products.sort((a, b) => b.rating - a.rating)
  }

}
export const actions = {
  async get_products({commit}, category_id) {
    const response = await api_requests.get_category_products(category_id)
    commit('get_products', response.data)
  },
  filter_by: ({commit}, option) => commit('filter_by', option)

}

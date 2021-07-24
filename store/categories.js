import api_requests from "~/store/api_requests";

export const state = () => ({
  categories: []
})

export const getters = {
  categories: state => state.categories
}

export const mutations = {
  get_categories(state, data) {
    state.categories = []
    for (let category of data.categories) {
      let new_category = JSON.parse(JSON.stringify(category)); /* Создаем новые обьект категории */
      new_category.active = Number(new_category.id) === Number(data.params_id) /* Добавляем новое поле и сразу проверяем статус  для активного класса категории */
      state.categories.push(new_category)
    }
  }
}

export const actions = {
  async get_categories({commit}, params_id=0) {
    const categories = await api_requests.get_categories()
    commit('get_categories', {categories: categories.data, params_id})

  }
}

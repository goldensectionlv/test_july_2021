export const state = () => ({
  filterModalActive: false,
  active_filter: 'цене',
})

export const getters = {
  filterModalActive: state => state.filterModalActive,
  active_filter: state => state.active_filter
}

export const mutations = {
  switchFilterModal: (state, action) => state.filterModalActive = action,
  change_active_filter: (state, filter_name) => state.active_filter = filter_name
}

export const actions = {
  switchFilterModal: ({commit}, action) => commit('switchFilterModal', action),
  change_active_filter: ({commit}, filter_name) => commit('change_active_filter', filter_name)
}


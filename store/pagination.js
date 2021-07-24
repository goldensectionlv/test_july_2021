export const state = () => ({
  pageNumber: 0,
  size: 20,
  pageCount: 0,
  current_page_arr: []
})

export const mutations = {
  paginatedData(state, data) {
    state.current_page_arr = []
    state.pageCount = Math.ceil(data.arr.length / state.size);
    state.pageNumber = data.pageNumber
    let start = data.pageNumber * state.size
    let end = start + state.size
    state.current_page_arr = data.arr.slice(start, end)
  }
}

export const actions = {
  paginatedData: ({commit}, {arr, pageNumber}) => commit('paginatedData', {arr, pageNumber})
}

export const getters = {
  current_page_arr: state => state.current_page_arr,
  pageNumber: state => state.pageNumber,
  pageCount: state => state.pageCount,
}

export const state = () => ({
  counter: 0
})

export const actions = {
  set(context, number) {
    const data = number
    context.commit('increment', { data })
  }
}

export const mutations = {
  increment(state, { data }) {
    state.counter += data
  }
}

export const getters = {
  counter(state) {
    return state.counter
  }
}

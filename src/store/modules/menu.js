function state() {
    return {
        menu: 0
    }
}

const mutations = {
    setMenu(state, { menu }) {
        state.menu = menu;
    },

    resetMenu(state) {
        state.menu = 0;
    }
}

const actions = {
    changeMenu({ commit }, { menu }) {
        commit('setMenu', { menu });
    },    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
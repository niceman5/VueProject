import Vue from 'vue'
import Vuex from 'vuex'

Vue.use('Vuex');

export default new Vuex.Store({
    state : {
        // data가 들어감

    },
    mutations : {
        // 실제 데이터를 변경하는 곳 (여기서만 변경해야 함)
    },
    actions : {
        // 함수가 들어감. 비동기적 처리. db처리등

    },
    getters : {
        //vue컴포넌트의 computed와 비슷

    }
})

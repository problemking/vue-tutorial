import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = parseInt(state.totalTime + parseInt(time))
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = parseInt(state.totalTime - parseInt(time))
  },
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'http://img5.imgtn.bdimg.com/it/u=2662674922,3159217733&fm=23&gp=0.jpg';
    state.list.push(
      Object.assign({ name: '张宇', avatar: avatar }, plan)//对象的合并es6语法
    )
  },
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};

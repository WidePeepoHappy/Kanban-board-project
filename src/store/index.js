import { createStore } from 'vuex'

export default createStore({
  state: {
    showSelect: false,
    showTaskEdit: false,
    showTaskView: false,
    tasks: [
      {
        boardName: 'Platform Launch',
        columnName: 'To Do',
        taskName: "Research pricing points of various competitors and trial different business models",
        taskDescription: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subtasks: [
          {
            subtaskName: 'Research competitor pricing and business models',
            completed: false,
          },
          {
            subtaskName: 'Outline a business model that works for our solution',
            completed: false
          },
          {
            subtaskName: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
            completed: false
          }
        ]
      }
    ]

  },
  getters: {
    // getTotalSubtasks(state, taskName) {
    //   state.tasks.forEach(task => {
    //     if(task.taskName === taskName) {
    //       return task.subtasks.length;
    //     }
    //   })
    // },

    getCompletedSubtasks(state, taskName) {
      state.tasks.forEach(task => {
        if(task.taskName === taskName) {
          return task.subtasks.filter(subtask => subtask.completed).length;
        }
      })
    },
    

  },
  mutations: {
    getTasksOnMounted(state, tasks) {
      state.tasks = tasks;
    },
    editTask(state, e) {
      console.log(e);
    },
    getTotalSubtasks(state, taskName) {
      state.tasks.forEach(task => {
        if(task.taskName === taskName) {
          console.log(task.subtasks.length)
          return task.subtasks.length;
        }
      })
    },
  },
  actions: {
    getTasksOnMounted(commit) {
      commit('getTasksOnMounted(', JSON.parse(localStorage.getItem('tasks')));
    }
  },
  modules: {
  }
})

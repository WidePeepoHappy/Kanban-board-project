<template>
  <div class="board">
    <!-- <div class="board__empty">
      <p>This board is empty. Create a new column to get started.</p>
      <button class="board__empty--button">+ Add New Column</button>
    </div> -->
    <div v-for="(task, index) in $store.state.tasks" :key="index" class="task-status">
      <h3>{{ task.columnName }} ({{ task.columnName }})</h3>
      <ul class="task-status__list">
        <li v-for="(subTask, index) in task.subtasks" :key="index" class="task-status__task">
          <h4>{{ subTask.subtaskName }}</h4>
          <p>0 of {{ $store.commit('getTotalSubtasks', task.taskName) }} subtasks</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardView',
  data () {
    return {
      taskStatuses: [
        {
          statusName: 'TODO',
          tasks: [
            {
              taskName: 'Research pricing points of various competitors and trial different business models',
              subtasks: function () {
                return JSON.parse(localStorage.getItem(this.taskName))
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .board {
    display: flex;
    height: calc(100vh - 97px);

    &__empty {
      display: inherit;
      flex-direction: column;
      margin: auto;
      color: #828FA3;

      &--button {
        margin: 0 auto;
        width: 174px;
        height: 48px;
        border-radius: 24px;
        border: none;
        background: #635FC7;
        color: #fff;
        margin-top: 32px;
      }
    }
  }

</style>

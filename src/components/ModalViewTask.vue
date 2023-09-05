<template>
    <ModalWrap @close-modal="this.$emit('closeModal')" @show-edit-task="showEditTask = false">
        <div class="modal__content--header">
          <h2>{{ taskName }}</h2>
          <img @click.stop="toggleEditTask()" @keyup.space="toggleEditTask()" tabindex="0" src="@/assets/icon-vertical-ellipsis.svg">
          <div v-if="showEditTask" class="modal__content--header__task-edit">
            <span tabindex="0" @click="$store.commit('editTask')">Edit Task</span>
            <span tabindex="0">Delete Task</span>
          </div>
        </div>

        <p>We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</p>

        <h3>Subtasks ( {{ completedSubtasks }} of {{ totalSubtasks }} )</h3>

        <div class="subtasks" v-for="(subtask, index) in subtasks" :key="index">
          <input
            type="checkbox"
            @change="changeActiveSubtasks($event, subtask, index)"
            :id=subtasks.indexOf(subtask)
            :checked="subtask.active">
          <label :for=subtasks.indexOf(subtask)>{{ subtask.name }}</label>
        </div>

        <h3 id="status">Current Status</h3>

        <CustomSelect />
    </ModalWrap>
</template>

<script>
import { throwStatement } from '@babel/types'
import ModalWrap from '@/components/ModalWrap.vue';
import CustomSelect from '@/components/CustomSelect.vue';

export default {
  name: 'Modal',
  components: {
    ModalWrap,
    CustomSelect
  },
  data () {
    return {
      taskName: 'Research pricing points of various competitors and trial different business models',
      showEditTask: false,
      subtasks: [
        {
          name: 'Research competitor pricing and business models',
          active: false
        },
        {
          name: 'Outline a business model that works for our solution',
          active: false
        },
        {
          name: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
          active: false
        }
      ]
    }
  },
  computed: {
    // totalSubtasks () {
    //   return this.subtasks.length
    // },
    // completedSubtasks () {
    //   return this.subtasks.filter(sub => sub.active === true).length
    // }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem(this.taskName))) {
      try {
        JSON.parse(localStorage.getItem(this.taskName)).forEach((storedTask, index) => {
          storedTask.active === true ? this.subtasks[index].active = true : this.subtasks[index].active = false
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  methods: {
    toggleEditTask () {
      this.showEditTask = !this.showEditTask
    },
    changeActiveSubtasks (event, subtask, index) {
      if (event.target.checked == true) {
        this.subtasks[index].active = true
      } else if (event.target.checked == false) {
        this.subtasks[index].active = false
      }
      localStorage.setItem(this.taskName, JSON.stringify(this.subtasks))
    },
  }
}

</script>

<style scoped lang="scss">
  .modal__content--header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    h2 {
      display: inline;
      width: 387px;
      font-size: 18px;
      color: #FFF;
    }

    img {
      width: 5px;
      height: 20px;
      align-self: center;
      cursor: pointer;
    }

    &__task-edit {
      position: absolute;
      width: 192px;
      background-color: #20212C;
      border-radius: 8px;
      right: -65px;
      top: 93.5px;

      span {
        display: block;
        font-size: 13px;
        line-height: 23px;
        padding: 8px 16px;
        cursor: pointer;

        &:first-child {
          padding-top: 16px;
          color: #828FA3;
          border-radius: 8px 8px 0 0;
        }

        &:first-child:hover {
          color: #fff;
        }

        &:last-child {
          padding-bottom: 16px;
          color: #EA5555;
          border-radius: 0 0 8px 8px;
        }

        &:hover {
          background-color: #3E3F4E;
        }
      }
    }
  }

  p {
    font-size: 13px;
    color:#828FA3;
    line-height: 23px;
  }

  h3 {
    margin: 24px 0 16px;
    font-size: 12px;
    color: #fff;

    &:last-of-type {
      margin-bottom: 8px;
    }
  }


  .subtasks {
    display: flex;
    align-items: center;
    padding: 13px 16px 12px 12px;
    border-radius: 4px;
    margin-bottom: 8px;
    color: #fff;
    background-color: #39395b;
    font-size: 12px;
    font-weight: 700;

    input[type="checkbox"] {
      align-self: center;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;
      display: inline-block;
      width: 16px;
      height: 16px;
      background-color: #2B2C37;
      border: 1px solid rgba(130, 143, 163, 0.248914);
      border-radius: 2px;
      cursor: pointer;
      outline: none;
    }

    label {
      margin-left: 16px;
      width: fit-content;
      cursor: pointer;
    }

    input[type="checkbox"]:focus {
      border: 1px solid #A8A4FF;
    }

    input[type="checkbox"]:checked {
      background: url(../assets/icon-check.svg) center no-repeat;
      background-color: #635FC7;
    }

    input[type="checkbox"]:checked + label {
      text-decoration: line-through;
    }
  }
  .subtasks:has(input[type="checkbox"]:checked) {
    background-color: #20212C;
  }

</style>

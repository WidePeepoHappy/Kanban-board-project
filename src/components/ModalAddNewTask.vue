<template>
  <ModalWrap @close-modal="$emit('closeModalEditTask')">
      <h2>Add New Task</h2>
      <form class="modal__content--form">
        <label for="title">Title</label>
        <input
          v-model="title"
          class="modal__content--form__input"
          id="title"
          placeholder="e.g. Take coffee break"
          type="text">
        <label for="description">Description</label>
        <textarea
          v-model="description"
          class="modal__content--form__input"
          id="description"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          type="text"></textarea>
        <label for="subtasks">Subtasks</label>
        <ul class="modal__content--form__subtasks">
          <li>
            <input
              class="modal__content--form__input"
              id="subtasks"
              placeholder="e.g. Make coffee"
              type="text">
            <img src="@/assets/icon-cross.svg" alt="cross">
          </li>
          <li>
            <input
              class="modal__content--form__input"
              placeholder="e.g. Drink coffee & smile"
              type="text">
              <img
              src="@/assets/icon-cross.svg"
              alt="cross">
          </li>
        </ul>
        <button class="modal__content--form__input button">+ Add New Subtask</button>
        <label for="status">Status</label>
      </form>

      <CustomSelect />

      <template #submit>
        <button
          class="modal__content--form__input button"
          id="submit">Create Task
        </button>
      </template>
    </ModalWrap>
</template>

<script>
import ModalWrap from '@/components/ModalWrap.vue';
import CustomSelect from '@/components/CustomSelect.vue'

export default {
  name: 'ModalAddNewTask',
  components: {
    ModalWrap,
    CustomSelect
  },
  data() {
    return {
      title: '',
      description: '',
      subtasks: [],
      status: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

  h2 {
    font-size: 18px;
    color: #fff;
    margin-bottom: 24px;
  }

  .modal__content--form {
    display: flex;
    flex-direction: column;
    color:#fff;

    label {
      margin-bottom: 8px;
      font-size: 12px;
    }

    &__input {
      padding: 7px 16px 8px;
      margin-bottom: 24px;
      font-size: 13px;
      line-height: 23px;
      border: 1px solid rgba(130, 143, 163, 0.25);
      border-radius: 4px;
      background: inherit;
      color: #fff;
    }
    

    #description {
      height: 112px;
      resize: none;
      font-family: inherit;
    }

    ul {
      list-style: none;

      li {
        margin-bottom: 12px;
      }

      input {
        width: 385px;
        margin-bottom: 0;
      }
      img {
        margin-left: 16px;
        align-self: center;
      }
    }

    

  }
  .button {
      font-weight: 700;
      background: #FFFFFF;
      border-radius: 20px;
      color: #635fc7;
      width: 416px;

      &:last-child {
        margin-top: 24px;
        margin-bottom: 0;
        background: #635FC7;
        color: #fff;
      }
  }

</style>
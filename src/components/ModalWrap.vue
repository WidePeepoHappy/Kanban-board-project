<template>
  <div @click="$emit('closeModal')" class="modal">
    <div class="modal__content" @click="$emit('showEditTask')" @click.stop="showSelect = false">
      <slot></slot>
      <slot name="submit"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalWrap',
  data() {
    return {
      showSelect: false,
      current: 'To do',
    }
  },
  methods: {
    toggleSelect () {
      this.showSelect = !this.showSelect
    },
    setStatus (status) {
      this.current = status
    },
  }
}
</script>

<style scoped lang="scss">
  .modal {
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    &__content {
      position: inherit;
      padding: 32px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 480px;
      border-radius: 6px;
      background: #2b2c37;

      &--button {
        padding: 7px 16px 8px;
        margin-bottom: 24px;
        font-size: 13px;
        line-height: 23px;
        border: 1px solid rgba(130, 143, 163, 0.25);
        border-radius: 4px;
        background: inherit;
        color: #fff;
      }
    }
  }
</style>
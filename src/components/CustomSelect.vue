<template>
  <div class="status" tabindex="0" @click="showSelect = !showSelect">
    <span class="status__current">
      {{ current }}
    </span>
    <ul v-if="showSelect" class="status__select">
      <li @click="setStatus('To Do')" tabindex="0" class="option">To Do</li>
      <li @click="setStatus('Doing')" tabindex="0" class="option">Doing</li>
      <li @click="setStatus('Done')" tabindex="0" class="status__option">Done</li>
    </ul>
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path stroke="#635FC7" stroke-width="2" fill="none" d="m1 1 4 4 4-4"/></svg>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  data() {
    return {
      showSelect: false,
      current: 'To do',
    }
  },
  methods: {
    setStatus (status) {
      this.current = status
    },
  }
}
</script>

<style scoped lang="scss">
.status {
  position: relative;
  height: 40px;
  width: 100%;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  line-height: 23px;
  color: #fff;

  
  &__select {
    position: relative;
    width: 416px;
    top: 13px;
    right: 16px;
    border-radius: 8px;
    background-color: #20212C;

    li {
      display: block;
      padding: 8px 16px;
      color: #828FA3;
      border: none;

      &:first-child {
        padding-top: 16px;
        border-radius: 8px 8px 0 0 ;
      }

      &:last-child {
        padding-bottom: 16px;
        border-radius: 0 0 8px 8px;
      }

      &:hover, &:focus {
        background: #3E3F4E;
        color: #fff;
        outline: none;
      }
    }
  }

  svg {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
}

.status:hover, .status:focus  {
  border: 1px solid #635FC7;
  outline: none;
}

</style>
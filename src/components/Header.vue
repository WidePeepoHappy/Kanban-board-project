<template>
  <div class="header">
    <h1>Platform Launch</h1>
    <div class="header__right-side">
      <button @click="$emit('showEditTask')" class="header__right-side--button">+ Add New Task</button>
      <img src="@/assets/icon-vertical-ellipsis.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 32.38px 0 24px;

    h1 {
      font-size: 24px;
      color: #fff;
      margin-top: 29px;
    }
  }

  .header__right-side {
    margin-top: 20px;

    &--button {
      width: 164px;
      height: 48px;
      border: none;
      border-radius: 24px;
      background: #635FC7;
      color: #fff;
      margin-right: 24px;
      cursor: pointer;
    }

    img {
      position: relative;
      top: 7px;
      cursor: pointer;
    }
  }

</style>

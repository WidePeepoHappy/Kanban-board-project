<template>
  <aside>
    <img src="@/assets/logo-light.svg" alt="logo-light" id="logo-light">
    <div class="boards">
      <p class="boards__all">ALL BOARDS (0)</p>
      <ul class="boards__list">
        <li @click="$emit('showViewTask')" class="boards__list--item" tabindex='0' >
          <svg class="icon-board" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="currentColor"/></svg>
          Platform Launch</li>
      </ul>
      <div class="boards__new-board">
        <img src="@/assets/icon-board-purple.svg" alt="icon-board" class="icon-board">
        <a class="boards__new-board--create" href="#">+ Create New Board</a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      boards: 0
    }
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
  #logo-light {
    margin: 34px auto 54px 32.78px;
  }

  .boards {
    width: 276px;
    &__all {
      color: #828FA3;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2.4px;
      margin: 0 0 19px 32px;
    }

    &__new-board {
      display: flex;
      align-items: center;
      height: 48px;
      padding: 14px 0 15px 32px;
      border-radius: 0 100px 100px 0;

      .icon-board {
        margin-right: 16px;
      }

      &--create {
        font-weight: 700;
        font-size: 15px;
        color: #635fc7;
        text-decoration: none;
      }
    }

    &__list--item {
      @extend .boards__new-board;
      list-style: none;
      color: #828FA3;

      &:hover {
        cursor: pointer;
        background-color: #FFF;
        color: #635fc7;
      }

      &:focus {
        background-color: #635fc7;
        color: #FFF;
      }
    }

  }

</style>

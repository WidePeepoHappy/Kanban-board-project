<template>
  <TheSidebar @show-view-task="viewTask = true"/>
  <header>
    <Header @show-edit-task="showEditTask = true"/>
  </header>
  <main>
    <BoardView/>
    <ModalViewTask @close-modal="viewTask = false" v-if="viewTask"/>
    <ModalAddNewTask @close-modal-edit-task="showEditTask = false" v-if="showEditTask"/>
  </main>
</template>

<script>
import TheSidebar from '@/components/TheSidebar.vue'
import ModalViewTask from '@/components/ModalViewTask.vue'
import Header from '@/components/Header.vue'
import BoardView from '@/components/BoardView.vue'
import ModalAddNewTask from '@/components/ModalAddNewTask.vue'

export default {
  components: {
    TheSidebar,
    ModalViewTask,
    Header,
    BoardView,
    ModalAddNewTask
  },
  data () {
    return {
      viewTask: false,
      showEditTask: false,
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap');

  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  height: 100vh;
  background-color: #20212C;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

aside {
  min-width: 300px;
  background-color: #2B2C37;
  float: left;
  height: 100%;
  border: 1px solid #3E3F4E;
}

header {
  height: 97px;
  background-color: #2B2C37;
  border: 1px solid #3E3F4E;
}
</style>

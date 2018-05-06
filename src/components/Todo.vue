<template>
  <li>
    {{ todo.text }}
    <button v-on:click="deleteTodo">Delete</button>
  </li>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    deleteTodo () {
      this.$store.dispatch("deleteTodo", this.todo.id);
    }
  }
}
</script>

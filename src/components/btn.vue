<template>
  <a
    class="btn"
    :class='[color, textColor]'
    @click="$emit('click', $event)"
  >
    <slot/>
  </a>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    textColor() {
      if (this.color == 'white') {
        return 'grey-text';
      }
      return 'white-text';
    },
  },
};
</script>

<style scoped>
  .btn{
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 50px!important
  }
</style>

<template>
  <a
    class="btn btn-sec btn-rounded"
    :class='[color, textColor]'
    @click="$emit('click', $event)"
  >
    {{text}}
  </a>
</template>

<script>
  import 'materialize-css'
  import 'materialize-css/dist/css/materialize.css'

  export default {
    props: ['text', 'color'],
    computed: {
      textColor: function(){
        if(this.color == 'white'){
          return 'grey-text'
        } else {
          return 'white-text'
        }
      }
    }
  }
</script>

<style>
  .btn{
    text-transform: uppercase;
  }

  .btn-sec {
    color: darkgrey;
    font-weight: bold;
    font-size: 14px;
    border: solid 1px;
    border-color: lightgray;
    background-color: white;
  }

  .btn-rounded {
    border-radius: 50px!important
  }
</style>

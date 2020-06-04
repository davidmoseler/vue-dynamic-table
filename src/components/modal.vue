<template>
  <div class="modal" :class="modalClass" @focusout="focusout($event)">
    <div class="modal-content">
      <h4>{{ title }}</h4>
      <div>
        <slot name="content"></slot>
      </div>
    </div>
    <div class="modal-footer">
      <a @click="closeModal" class="btn btn-flat">{{close_text}}</a>
      <slot name="additional_buttons"></slot>
    </div>
  </div>
</template>

<script>
  import {Modal} from 'materialize-css'
  import 'materialize-css/dist/css/materialize.css'

  export default {
    props: ['open', 'title', 'close_text', 'type'],
    mounted: function(){
      var instance = Modal.init(this.$el)
      if(this.open){
        instance.open()
      }
    },
    computed: {
      modalClass: function(){
        if(this.type=='short'){
          return 'short-modal'
        } else if (this.type=='bottom'){
          return 'bottom-sheet'
        } else {
          return 'modal-fixed-footer'
        }
      }
    },
    methods: {
      focusout: function(event){
        if (!event.currentTarget.contains(event.relatedTarget)) {
          this.closeModal()
        }
      },
      closeModal: function(){
        this.$emit('update:open', false)
      }
    },
    watch: {
      open: function(value){
        var instance = Modal.getInstance(this.$el);
        if(value){
          instance.open()
        } else {
          instance.close()
        }
      }
    }
  }
</script>

<style>
  .short-modal{
    height: auto;
  }

  .short-modal p {
    font-size: 18px;
  }

  #modal-motivos .header{
    font-weight: bold;
    font-size: 25px;
  }
</style>

<template>
  <div class="modal" :class="modalClass" @focusout="focusout($event)">
    <div class="modal-content">
      <h4>{{ title }}</h4>
      <div>
        <slot />
      </div>
    </div>
    <div class="modal-footer">
      <a class="btn btn-flat" @click="closeModal">{{ close_text }}</a>
      <slot name="additional_buttons" />
    </div>
  </div>
</template>

<script>
import { Modal } from 'materialize-css';

export default {
  props: ['open', 'title', 'close_text', 'type'],
  computed: {
    modalClass() {
      if (this.type == 'short') {
        return 'short-modal';
      }
      if (this.type == 'bottom') {
        return 'bottom-sheet';
      }
      return 'modal-fixed-footer';
    }
  },
  watch: {
    open(value) {
      const instance = Modal.getInstance(this.$el);
      if (value) {
        instance.open();
      } else {
        instance.close();
      }
    }
  },
  mounted() {
    const instance = Modal.init(this.$el);
    if (this.open) {
      instance.open();
    }
  },
  methods: {
    focusout(event) {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit('update:open', false);
    }
  }
};
</script>

<style scoped>
.short-modal {
  height: auto;
}

.short-modal p {
  font-size: 18px;
}

#modal-motivos .header {
  font-weight: bold;
  font-size: 25px;
}
</style>

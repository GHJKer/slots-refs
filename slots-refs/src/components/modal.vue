<template>
  <div class="fade-show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div 
          class="modal-body"
          @scroll="onBodyScroll"
          ref="modalBody"
          >
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-primary"
            :disabled="!rulesAreRead"
          >
            Принять
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeModal"
            data-dismiss="modal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrollHandler from '../mixins/scrollHandler'

export default {
    data() {
        return {
            rulesAreRead: false
        }
    },
  props: {
    title: {
      type: String,
      default: "",
    }
  },
  mixins: [scrollHandler],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}
</style>
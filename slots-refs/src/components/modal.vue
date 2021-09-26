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
          @signal="scrollJump"
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
  methods: {
    scrollJump() {
      console.log("hi")
      const modalBody = this.$refs.modalBody
      modalBody.scrollBy(0, modalBody.clientHeight + modalBody.scrollTop);
    },
    closeModal() {
      this.$emit("close");
    }/* ,
    onBodyScroll() {
        const modalBody = this.$refs.modalBody
        if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.
            scrollHeight ) {  (это с 19ой строки - @scroll="onBodyScroll")
            this.rulesAreRead = true
        }
    } */
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
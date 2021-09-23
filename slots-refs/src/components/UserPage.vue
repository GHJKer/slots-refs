<template>
      <b-container class="wrapper">
          <b-button
            type="button"
            @click="openModal"
          >
            Отправить что-нибудь
          </b-button>
          <modal 
            v-if="isModalOpen"
          />
      </b-container>
      
</template>

<script>
import modal from './modal.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    modal
  },
  data() {
      return {
          isModalOpen: false
      }
  },
  methods: {
      openModal() {
          this.isModalOpen = true
      }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 50px;
}

</style>
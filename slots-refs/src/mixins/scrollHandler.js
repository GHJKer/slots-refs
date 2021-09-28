export default {
    methods: {
        onBodyScroll() {
            const modalBody = this.$refs.modalBody
            if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.
                scrollHeight) {
                this.rulesAreRead = true
            }
        }
    }
}
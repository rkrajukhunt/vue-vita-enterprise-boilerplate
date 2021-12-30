// eslint-disable-next-line no-unused-vars
let loader = null;

export default {
  methods: {
    async startOverlayLoader() {
      loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.modalBodyContainer,
        canCancel: false,
        onCancel: this.onCancel,
        loader: "bars",
        color: "#1c62a3"
      });
    },
    async stopOverlayLoader() {
      loader.hide();
    }
  }
};

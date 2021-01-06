export default ($axios) => (resource) => ({
  getTx(txid) {
    return $axios.$get(`${resource}/${txid}`);
  },

  recent() {
    return $axios.$get(`${resource}/recent`);
  },
});

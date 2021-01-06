export default ($axios) => (resource) => ({
  present() {
    return $axios.$get(`${resource}/present`);
  },

  summaries() {
    return $axios.$get(`${resource}/summaries`);
  },
});

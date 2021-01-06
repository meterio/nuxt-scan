export default ($axios) => (resource) => ({
  all() {
    return $axios.$get(`${resource}/all`);
  },

  pow() {
    return $axios.$get(`${resource}/pow`);
  },

  pos() {
    return $axios.$get(`${resource}/pos`);
  },

  head() {
    return $axios.$get(`${resource}/head`);
  },
});

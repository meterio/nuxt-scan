export default ($axios) => (resource) => ({
  recent() {
    return $axios.$get(`${resource}/recent`);
  },
});

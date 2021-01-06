export default ($axios) => (resource) => ({
  // Search for tx/block/account
  get(keyword) {
    return $axios.$get(`${resource}/${keyword}`);
  },
});

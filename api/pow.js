export default ($axios) => (resource) => ({
  // Get recent pow blocks
  recentBlocks() {
    return $axios.$get(`${resource}/blocks/recent`);
  },

  //  Get mining rewards information
  rewards({ page = 1, limit = 10 }) {
    return $axios.$get(`${resource}/blocks/rewards`, {
      page,
      limit,
    });
  },
});

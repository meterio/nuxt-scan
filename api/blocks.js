export default ($axios) => (resource) => ({
  // Get block, revision can be best, block number or block ID
  getBlock(revesion) {
    return $axios.$get(`${resource}/${revision}`);
  },

  // Get block transactions
  getTxs(blockId) {
    return $axios.$get(`${resource}/${blockId}/txs`);
  },

  // Get recent blocks
  recent() {
    return $axios.$get(`${resource}/recent`);
  },
});

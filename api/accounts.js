export default ($axios) => (resource) => ({
  getAddress({ address }) {
    return $axios.$get(`${resource}/${address}`);
  },

  getAddressTxs({ address, page = 1, limit = 10 }) {
    return $axios.$get(`${resource}/${address}/txs`, {
      page,
      limit,
    });
  },

  getAddressTransfers({ address, page = 1, limit = 10 }) {
    return $axios.$get(`${resource}/${address}/transfers`, {
      page,
      limit,
    });
  },
});

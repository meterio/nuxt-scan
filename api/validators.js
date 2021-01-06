export default ($axios) => (resource) => ({
  count() {
    return $axios.$get(`${resource}/count`);
  },

  delegateList({ page = 1, limit = 10 }) {
    return $axios.$get(`${resource}/delegate`, {
      page,
      limit,
    });
  },

  candidateList({ page = 1, limit = 10 }) {
    return $axios.$get(`${resource}/candidate`, {
      page,
      limit,
    });
  },

  jailedList({ page = 1, limit = 10 }) {
    return $axios.$get(`${resource}/jailed`, {
      page,
      limit,
    });
  },
});

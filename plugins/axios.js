import createMetricsAxios from "~/api/metrics";
import createAccountsAxios from "~/api/accounts";
import createBlocksAxios from "~/api/blocks";
import createPoWAxios from "~/api/pow";
import createAuctionsAxios from "~/api/auctions";
import createTransfersAxios from "~/api/transfers";
import createTxsAxios from "~/api/txs";
import createValidatorsAxios from "~/api/validators";
import createSearchAxios from "~/api/search";

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const metricsWithAxios = createMetricsAxios(ctx.$axios);
  const accountsWithAxios = createAccountsAxios(ctx.$axios);
  const blocksWithAxios = createBlocksAxios(ctx.$axios);
  const poWWithAxios = createPoWAxios(ctx.$axios);
  const auctionsWithAxios = createAuctionsAxios(ctx.$axios);
  const transfersWithAxios = createTransfersAxios(ctx.$axios);
  const txsWithAxios = createTxsAxios(ctx.$axios);
  const validatorsWithAxios = createValidatorsAxios(ctx.$axios);
  const searchWithAxios = createSearchAxios(ctx.$axios);

  inject("metrics", metricsWithAxios("/metrics"));
  inject("accounts", accountsWithAxios("/accounts"));
  inject("blocks", blocksWithAxios("/blocks"));
  inject("pow", poWWithAxios("/pow"));
  inject("auctions", auctionsWithAxios("/auctions"));
  inject("transfers", transfersWithAxios("/transfers"));
  inject("txs", txsWithAxios("/txs"));
  inject("validators", validatorsWithAxios("/validators"));
  inject("search", searchWithAxios("/search"));
};

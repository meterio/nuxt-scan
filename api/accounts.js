import { get } from "@/utils/request";

export const getAccount = ({ address }) => {
  return get("/accounts/" + address);
};

export const getAccountTxs = ({ address, page = 1, limit = 10 }) => {
  return get("/accounts/" + address + "/txs", {
    page,
    limit,
  });
};

export const getAccountTransfers = ({ address, page = 1, limit = 10 }) => {
  return get("/accounts/" + address + "/transfers", {
    page,
    limit,
  });
};

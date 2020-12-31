import { get } from "@/utils/request";

export const getTx = ({ txid }) => {
  return get("/txs" + txid);
};

export const getTxsRecnet = () => {
    return get("/txs/recent");
  };
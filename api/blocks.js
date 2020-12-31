import { get } from "@/utils/request";

export const getBlocksRevision = ({ revision }) => {
  return get("/blocks/" + revision);
};

export const getBlockTxs = ({ blockid }) => {
  return get("/blocks/" + blockid + "/txs");
};

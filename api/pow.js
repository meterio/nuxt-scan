import { get } from "@/utils/request";

export const getPoWBlocksRecent = () => {
  return get("/pow/blocks/recent");
};

export const getPoWReward = () => {
  return get("/pow/blocks/rewards");
};

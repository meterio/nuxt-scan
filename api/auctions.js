import { get } from "@/utils/request";

export const getAuctionsPresent = () => {
  return get("/auctions/present");
};

export const getAuctionsSumaries = () => {
  return get("/auctions/summaries");
};

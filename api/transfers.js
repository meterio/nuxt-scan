import { get } from "@/utils/request";

export const getTransferRecent = () => {
  return get("/transfers/recent");
};
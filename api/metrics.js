import { get } from "@/utils/request";

export const getAllMetrics = () => {
  return get("/metrics/all");
};

export const getPoSMetrics = () => {
  return get("/metrics/pos");
};

export const getPoWMetrics = () => {
  return get("/metrics/pow");
};

export const getHeadMetrics = () => {
  return get("/metrics/head");
};
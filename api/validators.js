import { get } from "@/utils/request";

export const getValidatorsCount = () => {
  return get("/validators/count");
};

export const getValidatorsDelegate = ({ page, limit = 10 }) => {
  return get("/validators/delegate", {
    page,
    limit,
  });
};

export const getValidatorsCandidate = ({ page, limit = 10 }) => {
  return get("/validators/candidate", {
    page,
    limit,
  });
};

export const getValidatorsJailed = ({ page, limit = 10 }) => {
  return get("/validators/jailed", {
    page,
    limit,
  });
};

import qs from "qs";

/* https://axios-http.com/docs/urlencoded */
export const encodingPromisesBodies = (
  schema: Record<string, string>
): string => {
  return qs.stringify(schema);
};

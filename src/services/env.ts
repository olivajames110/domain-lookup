export const localApiServerURL = (): string => {
  if (process.env.NODE_ENV === "development") {
    // Local Development
    return "http://localhost:3000/api";
  }
  if (process.env.EB_ENVIRONMENT !== "production") {
    // Dev Environment
    return "https://api-dev.fuku.tv/api";
  }
  // Prod Environment
  return "http://domain-lookup.ordereze.com/api";
};

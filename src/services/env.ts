export const localApiServerURL = (): string => {
  if (process.env.NODE_ENV === "development") {
    // Local Development
    return "http://localhost:3000/api";
  }

  // Prod Environment
  return "http://domain-lookup.ordereze.com/api";
};

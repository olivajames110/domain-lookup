export default {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "**/*.ts?(x)": () => "tsc --noEmit --pretty",
  "*.json": ["prettier --write"],
};

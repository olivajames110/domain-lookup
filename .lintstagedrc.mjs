export default {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint", "prettier --write"],
  "**/*.ts?(x)": () => "tsc --noEmit --pretty",
  "*": ["prettier --ignore-unknown --write"],
};

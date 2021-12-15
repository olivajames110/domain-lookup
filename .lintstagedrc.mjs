export default {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint", "prettier --write"],
  "**/*.ts?(x)": () => "tsc-files --noEmit --pretty",
  "*": ["prettier --ignore-unknown --write"],
};

const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities }) => {
  const rules = {
    '.invisible-scroll-y': {
      'overflow-y': 'auto',

      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    ".button-gradient": {
      backgroundImage:
        "radial-gradient(circle at 50% 30%,#fffce8,#ffeb00 45%,#958a06 80%)",
    },
    ".gradient-outline": {
      backgroundImage: "linear-gradient(180deg,#030303,#535353)",
    },
    ".bg-gradient": {
      backgroundImage: "linear-gradient(180deg,#939393,#676767 12%,#080808)",
    },
  };
  addUtilities(rules);
});

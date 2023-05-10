const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addComponents }) => {
  /** @type {import("./types").RecursiveCssRules} */
  const rules = {
    ".btn": {
      height: "35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "17.5px",
      fontSize: "14px",
      fontWeight: "medium",
      transition: "all 300ms ease-in-out",
      outline: "none",
    },

    ".btn.btn-danger": {
      color: "white",
      height: "34px",
      padding: "0px 1rem",
      backgroundColor: "#fd2f2f",
      "&:hover": {
        backgroundColor: "#f25252",
      },
    },

    ".btn.btn-primary": {
      color: "white",
      boxShadow: "#7A7A7A",
      background: "#7224BF",
      borderColor: "transparent",

      "&:hover,&:focus": {
        background: {
          opacity: "0.8",
        },
      },
    },
  };

  addComponents(rules);
});

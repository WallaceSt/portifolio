/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            listStyleType: {
                circle: "circle",
            },
            fontFamily: {
                Oswald: ["Oswald", "sans-serif"],
            },
            colors: {
                "screen-lock": "rgba(30, 50, 100, 0.82)",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".aside-lang": {
                    "writing-mode": "vertical-rl",
                    transform: "rotate(180deg)",
                    display: "flex",
                    gap: "10px",
                    position: "absolute",
                    bottom: "30px",
                    left: "10px",
                },
            });
        }),
    ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/pages/**/*.html"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(0,113,248)",
                secondary: "rgb(238,98,107)",
                white: "rgb(255, 255, 255)",
                black: "rgb(30, 30, 30)",
                lightGray: "rgb(232, 232, 232)",
            },
        },
    },
    plugins: [],
};

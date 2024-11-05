import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "/src/pages/shop.html"),
                shopUser: resolve(__dirname, "/src/pages/shop-user.html"),
                login: resolve(__dirname, "/src/pages/login.html"),
                user: resolve(__dirname, "/src/pages/user.html"),
                productDetails: resolve(
                    __dirname,
                    "/src/pages/products-details.html"
                ),
                shopAdventure: resolve(
                    __dirname,
                    "/src/pages/shop-adventure.html"
                ),
                shopAdventureUser: resolve(
                    __dirname,
                    "/src/pages/shop-adventure-user.html"
                ),
                shopStrategy: resolve(
                    __dirname,
                    "/src/pages/shop-strategy.html"
                ),
                shopStrategyUser: resolve(
                    __dirname,
                    "/src/pages/shop-strategy-user.html"
                ),
                shopRacing: resolve(__dirname, "/src/pages/shop-racing.html"),
                shopRacingUser: resolve(
                    __dirname,
                    "/src/pages/shop-racing-user.html"
                ),
            },
        },
    },
});

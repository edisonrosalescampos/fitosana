import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from './views/home.vue'
import AboutView from './views/about.vue'
import ProductsView from './views/products.vue'
import ProductDetailsView from './views/productDetails.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { name: "Home", path: "/", component: ProductsView },
        { name: "About", path: "/about", component: AboutView },
        { name: "Products", path: "/products", component: ProductsView },
        { name: "ProductDetails", path: "/product/:slug", component: ProductDetailsView }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router;
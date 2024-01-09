import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import ShoppingCartPageVue from './pages/ShoppingCartPage.vue'
import ProductDetailsPageVue from './pages/ProductDetailsPage.vue'
import ProductsPageVue from './pages/ProductsPage.vue'

createApp(App).use(VueRouter.creareRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{path: '/cart', component: ShoppingCartPageVue},
{path: '/products/:productId', component: ProductDetailsPageVue},
{path: '/products', component: ProductsPageVue}]
})).mount('#app')

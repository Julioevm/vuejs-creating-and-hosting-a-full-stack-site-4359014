<template>
  <div v-if="product">
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageName" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{  product.price }}</p>
      <router-link :to="'/products/' + product.id">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { products } from '@/temp-data';
import NotFoundPage from './NotFoundPage.vue';
export default {
    name: "ProductDetailPage",
    data() {
        return {
            product: products.find(product => product.id === this.$route.params.productId)
        };
    },
    components: NotFoundPage,
}
</script>
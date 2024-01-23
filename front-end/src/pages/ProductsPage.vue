<template>
  <h1>Products</h1>
  <ProductList :products="products"/>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import { products } from '@/temp-data';
export default {
    name: "ProductsPage",
    data() {
        return { products, };
    },
    components: { ProductList }
}
</script>
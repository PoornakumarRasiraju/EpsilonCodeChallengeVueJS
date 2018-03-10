<template>
  <section class="products">
    <h1>Product List</h1>
    <div class="products__section">
      <product-list></product-list>
      <add-new-product></add-new-product>
    </div>
  </section>
</template>

<script>
import ProductList from './Products/ProductList.vue';
import AddNewProduct from './Products/AddNewProduct';

export default {
  name: 'Products',
  components: {
    ProductList,
    AddNewProduct
  },
  data() {
    return {
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products__section {
  display: flex;
  flex: 1;
}

.products__table {
  display: flex;
  flex: 1;
}
</style>

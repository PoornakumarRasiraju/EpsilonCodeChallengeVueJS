<template>
  <section class="products">
    <h1>Product List</h1>
    <div class="products__wrapper">
      <product-list></product-list>
      <add-new-product></add-new-product>
    </div>
  </section>
</template>

<script>
import ProductList from './Products/ProductList';
import AddNewProduct from './Products/AddNewProduct';

export default {
  name: 'Products',
  components: {
    ProductList,
    AddNewProduct
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-bottom: 30px;

  h1 {
    color: #333;
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
  }
}

.products__wrapper {
  display: flex;
  flex: 1;
  align-items: flex-start;
}

@media (min-width : 0px) and (max-width : 580px) {
  .products__wrapper {
    flex-direction: column;
  }
}
</style>
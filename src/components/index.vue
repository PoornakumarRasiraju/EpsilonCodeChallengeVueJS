<template>
  <section class="products">
    <h1 class="products__header-label">Product List</h1>
    <div class="products__section">
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
}

.products__header-label {
  color: #333;
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
}

.products__section {
  display: flex;
  flex: 1;
  align-items: flex-start;
}

.products__table {
  display: flex;
  flex: 1;
}

@media (min-width : 0px) and (max-width : 580px) {
  .products__section {
    flex-direction: column;
  }
}
</style>
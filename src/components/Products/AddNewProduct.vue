<template>
    <div class="product-list__add-product">
        <h2 class="product-list__header-label">Add New Product</h2>
        <v-text-input
            label="Product Name"
            placeholder="Enter Product Name"
            @input="productName">
        </v-text-input>

        <v-text-input
            label="Price"
            placeholder="Enter Price"
            @input="productPrice">
        </v-text-input>

        <v-text-input
            label="Category"
            placeholder="Enter Category"
            @input="productCategory">
        </v-text-input>

        <v-button
            label="Add Product"
            @buttonClick="addProduct">
        </v-button>
    </div>
</template>

<script>
import VTextInput from '../TextInput/TextInput.vue';
import VButton from '../Button/Button.vue';

export default {
    name: 'AddNewProduct',
    components: {
        VTextInput,
        VButton
    },
    data() {
        return {
            name: '',
            price: '',
            category: ''
        };
    },
    methods: {
        productName(name) {
            this.name = name;
        },
        productPrice(price) {
            this.price = price;
        },
        productCategory(category) {
            this.category = category;
        },
        addProduct(product) {
            console.log(`${this.name} ${this.price} ${this.category}`);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-list__add-product {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid #c4c4c4;
    padding: 14px 20px 10px 20px;
}

.product-list__header-label {
    color: #333;
    font-family: OpenSans;
    font-size: 15px;
    font-weight: 600;
}
</style>

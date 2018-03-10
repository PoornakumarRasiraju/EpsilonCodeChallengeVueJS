<template>
    <div class="product-list__add-product">
        <h2 class="product-list__header-label">Add New Product</h2>
        <v-text-input
            label="Product Name"
            :value = "name"
            placeholder="Enter Product Name"
            @input="productName">
        </v-text-input>

        <v-text-input
            label="Price"
            :value="price"
            placeholder="Enter Price"
            @input="productPrice">
        </v-text-input>

        <v-text-input
            label="Category"
            :value="category"
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
import Vue from 'vue';

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
        addProduct() {
            const product = {
                name: this.name,
                price: this.price,
                category: this.category
            };

            if(this.name || this.price || this.category) {
                this.$bus.$emit('addNewProduct', product);
            }

            this.clearProduct();
        },
        clearProductName() {
            this.name = '';
        },
        clearProductPrice() {
            this.price = '';
        },
        clearProductCategory() {
            this.category = '';
        },
        clearProduct() {
            this.clearProductName();
            this.productPrice();
            this.productCategory();
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
    padding: 2px 19px 20px 20px;
}

.product-list__header-label {
    color: #333;
    font-size: 15px;
    font-weight: 600;
}
</style>

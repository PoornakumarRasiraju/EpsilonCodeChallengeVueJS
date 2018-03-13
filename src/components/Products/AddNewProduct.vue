<template>
    <div class="product-list__add-new-product">
        <section class="product-list__add-product">
            <h2>Add New Product</h2>
            <v-text-input
                label="Product Name"
                id="productName"
                :value = "name"
                placeholder="Enter Product Name"
                @input="productName"
                :validation="validName">
            </v-text-input>

            <v-text-input
                label="Price"
                id="productPrice"
                :value="price"
                placeholder="Enter Price"
                @input="productPrice"
                :validation="validPrice">
            </v-text-input>

            <v-text-input
                label="Category"
                id="productCategory"
                :value="category"
                placeholder="Enter Category"
                @input="productCategory"
                :validation="validCategory">
            </v-text-input>

            <v-button
                label="Add Product"
                @buttonClick="addProduct"
                classes="button--primary">
            </v-button>
        </section>

        <p v-if="productAdded" class="product-list__add-product-success">
            <strong>{{productAdded}} product was successfully added to the product list.</strong>
        </p>
    </div>
</template>

<script>
import VTextInput from '../TextInput/TextInput';
import VButton from '../Button/Button';
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
            category: '',
            productAdded: '',
            validName: true,
            validPrice: true,
            validCategory: true
        };
    },
    methods: {
        productName(name) {
            if(name) {
                this.validName = true;
                this.productAdded = '';
            }

            this.name = name;
        },
        productPrice(price) {
            const DOLLAR_CURRENCY_REGEX = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;
            
            if(!price || DOLLAR_CURRENCY_REGEX.test(price)) {
                this.validPrice = true;
            } else {
                this.validPrice = false;
            }

            this.price = price;
            this.productAdded = '';
        },
        productCategory(category) {
            if(category) {
                this.validCategory = true;
                this.productAdded = '';
            }

            this.category = category;
        },
        addProduct() {
            const product = {
                name: this.name,
                price: this.dollarSymbol(this.price),
                category: this.category
            };

            if(!this.name) {
                this.validName = false;
            }

            if(!this.price) {
                this.validPrice = false;
            }

            if(!this.category) {
                this.validCategory = false;
            }

            if(this.validateForm() && this.validPrice) {
                this.$bus.$emit('addNewProduct', product);
                this.productAdded = this.name;
                this.clearProduct();
            }
        },
        dollarSymbol(dollar) {
            if(this.price.indexOf('$') === 0) {
                return dollar;
            } else {
                return '$'+dollar;
            }
        },
        validateForm() {
            if(this.name && this.price && this.category) {
                return true;
            } 

            return false;
        },
        clearProduct() {
            this.name = '';
            this.price = '';
            this.category = '';
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$add-product-border-color: #c4c4c4;
$add-product-color: #333;

.product-list__add-new-product {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.product-list__add-product {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid $add-product-border-color;
    padding: 2px 19px 20px 20px;

    h2 {
        color: $add-product-color;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 14px;
    }
}

.product-list__add-product-success {
    color: #155724;
    font-size: 12px;
}
</style>

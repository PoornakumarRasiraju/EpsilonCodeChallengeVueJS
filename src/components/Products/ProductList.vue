<template>
    <div class="product-list">
        <v-table
            :sortKey="sortKey"
            :columns="columns"
            :rows="rows">
        </v-table>
    </div>
</template>

<script>
import VTable from '../Table/Table';
import Vue from 'vue';

export default {
    name: 'ProductList',
    components: {
       VTable
    },
    data() {
        return {
            rows: [],
            sortKey: 'name',
            columns: ['name', 'price', 'category'],
            
        };
    },
    computed: {},
    methods: {
        getProductList() {
            const URL = 'http://usweb.dotomi.com/resources/swfs/cookies.json';

            return this.$http.get(URL)
                .then( response => {
                    this.rows = response.body;
                })
                .catch( error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getProductList();
        this.$bus.$on('addNewProduct', (product) => {
            this.rows.push(product);
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-list {
    display: flex;
    flex: 3;
    margin-right: 30px;
}
</style>

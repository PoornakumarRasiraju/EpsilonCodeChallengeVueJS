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
import axios from 'axios';

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

            return axios.get(URL)
                .then( response => {
                    this.rows = response.data;
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
    margin-bottom: 30px;
    margin-right: 30px;
}
</style>

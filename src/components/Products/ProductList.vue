<template>
    <div class="product-list">
        <!-- <input v-model="search" class="form-control" placeholder="Filter users by name or age"> -->

        <table class="product-list__table">
            <thead>
                <tr>
                    <th v-for="column in columns">
                        {{column}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'ProductList',
    components: {
       
    },
    data() {
        return {
            sortKey: 'name',
            reverse: false,
            search: '',
            columns: ['Product Name', 'Price', 'Category'],
            products: []
        };
    },
    methods: {
        getProductList() {
            const URL = 'http://usweb.dotomi.com/resources/swfs/cookies.json';

            return this.$http.get(URL)
                    .then( response => {
                        this.products = response.body;
                    })
                    .catch( error => {
                        console.log(error);
                    });
        },
        sortBy: function(sortKey) {
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        }
    },
    mounted() {
        this.getProductList();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$table-border-color: #c4c4c4;
$thead-bg-color: #7a8594;
$tbody-tr-even-color: #f6f6f6;
$th-label-color: #fff;
$td-label-color: #333;

.product-list {
    display: flex;
    flex: 1;
}

.product-list__table {
    border: 1px solid $table-border-color;
    border-collapse: collapse;
    font-size: 12px;
    width: 100%;
}

thead {
    background-color: $thead-bg-color;
}

tbody {
    tr {
        &:nth-child(even) {
            background-color: $tbody-tr-even-color;
        }
    }
}

th {
    color: $th-label-color;
    font-weight: 600;
    padding: 11px 10px 12px 15px;
    text-align: left;
}

td {
    color: $td-label-color;
    padding: 11px 10px 12px 15px;
}
</style>

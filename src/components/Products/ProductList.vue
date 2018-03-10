<template>
    <div class="product-list">
        <!-- <input v-model="search" class="form-control" placeholder="Filter users by name or age"> -->

        <table class="product-list__table">
            <thead>
                <tr>
                    <th v-for="column in columns"
                        v-on:click="sortBy(column)">
                        <span class="product-list__header-label">{{column}}</span>
                        <i class="fas" 
                            v-if="column == sortColumn" 
                            v-bind:class="ascending ? 'fa-caret-up' : 'fa-caret-down'">
                        </i>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows">
                    <td v-for="column in columns"> {{row[column]}}</td>
                    <!-- <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td> -->
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
            ascending: false,
            sortColumn: '',
            reverse: false,
            search: '',
            columns: ['name', 'price', 'category'],
            rows: []
        };
    },
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
        },
        sortBy(column) {
            if (this.sortColumn === column) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = column;
            }

            let ascending = this.ascending;

            this.rows.sort(function(a, b) {
                if (a[column] > b[column]) {
                    return ascending ? 1 : -1
                } else if (a[column] < b[column]) {
                    return ascending ? -1 : 1
                }

                return 0;
            })
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
    flex: 3;
    margin-right: 30px;
}

.product-list__table {
    border: 1px solid $table-border-color;
    border-collapse: collapse;
    font-size: 12px;
    width: 100%;
}

.product-list__header-label {
    margin-right: 15px;
}

.fas {
    font-size: 18px;
    position: absolute;
    top: 8px;
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
    border-right: 1px solid #fff;
    color: $th-label-color;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    padding: 11px 10px 12px 15px;
    text-align: left;

    &:last-child {
        border-right: none;
    }

}

td {
    color: $td-label-color;
    padding: 11px 10px 12px 15px;
}
</style>

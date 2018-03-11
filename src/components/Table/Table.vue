<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns"
                    v-on:click="sortBy(column)">
                    <span>{{label(column)}}</span>
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
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'VTable',
    components: {},
    props: {
        sortKey: {
            type: String
        },
        columns: {
            type: Array
        },
        rows: {
            type: Array
        }
    },
    data() {
        return {
            sortColumn: '',
            search: '',
            ascending: false,
            reverse: false
        };
    },
    computed: {},
    methods: {
        label(label) {
            switch(label) {
                case 'name': return 'Product Name';
                case 'price': return 'Product Price';
                case 'category': return 'Product Category';
                default: return '';
            }
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
                    return ascending ? 1 : -1;
                } else if (a[column] < b[column]) {
                    return ascending ? -1 : 1;
                }

                return 0;
            })
        }
    },
    mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$table-border-color: #c4c4c4;
$thead-bg-color: #7a8594;
$tbody-tr-even-color: #f6f6f6;
$th-label-color: #fff;
$th-border-color: #fff;
$td-label-color: #333;

table {
    border: 1px solid $table-border-color;
    border-collapse: collapse;
    font-size: 12px;
    width: 100%;
}

th {
    span {
        margin-right: 15px;
    }
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
    border-right: 1px solid $th-border-color;
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
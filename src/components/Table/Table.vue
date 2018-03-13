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
            reverse: false,
            sortNumbers: ['price']
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

            if(this.sortNumbers.includes(column)) {
                this.sortNumber(column, ascending);
            } else {
                this.sortString(column, ascending);
            }
        },
        sortString(column, ascending) {
            this.rows.sort((a, b) => {
                const valueA = a[column].toUpperCase();
                const valueB = b[column].toUpperCase();

                if (valueA > valueB) {
                    return ascending ? 1 : -1;
                } else if (valueA < valueB) {
                    return ascending ? -1 : 1;
                }

                return 0;
            })
        },
        sortNumber(column, ascending) {
            this.rows.sort((a, b) => {
                let valueA = a[column];
                let valueB = b[column];
                const valueANum = valueA.indexOf('$') === 0 ? parseFloat(valueA.substr(1)) : parseFloat(valueA);
                const valueBNum = valueB.indexOf('$') === 0 ? parseFloat(valueB.substr(1)) : parseFloat(valueB);

                if (valueANum > valueBNum) {
                    return ascending ? 1 : -1;
                } else if (valueANum < valueBNum) {
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

.fas {
    font-size: 18px;
    position: absolute;
    top: 11px;
}

table {
    border: 1px solid $table-border-color;
    border-collapse: collapse;
    font-size: 12px;
    width: 100%;
}

thead {
    background-color: $thead-bg-color;
}

th {
    border-right: 1px solid $th-border-color;
    color: $th-label-color;
    cursor: pointer;
    position: relative;
    padding: 11px 10px 12px 15px;
    text-align: left;

    span {
        font-weight: normal;
        margin-right: 15px;
    }

    &:last-child {
        border-right: none;
    }
}

tbody {
    tr {
        &:nth-child(even) {
            background-color: $tbody-tr-even-color;
        }
    }
}

td {
    color: $td-label-color;
    padding: 11px 10px 12px 15px;
}
</style>

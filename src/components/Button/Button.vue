<template>
    <button class="button" :class="classes" type="button" @click="clickHandler">{{label}}</button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        label: {
            type: String
        },
        classes: {
            type: String,
            default: 'button--primary'
        }
    },
    methods: {
        clickHandler() {
            this.$emit('buttonClick');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button, input[type="submit"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
}

.button {
    border-radius: 1px;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 600;
    padding: 6px 12px 6px 10px;
    max-width: 110px;
}

.button--primary {
    color: #fff;
    background-color: #4ba1a1;
}
</style>

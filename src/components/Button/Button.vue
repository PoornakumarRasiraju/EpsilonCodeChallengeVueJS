<template>
    <button class="button button--primary" type="button" @click="clickHandler">{{label}}</button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        label: {
            type: String
        }
    },
    methods: {
        /*
        * Handler for click events 
        */
        clickHandler() {
            this.$emit('buttonClick');
        }
    }
}
</script>

<style scoped>
button, input[type="submit"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.button {
    border-radius: 1px;
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

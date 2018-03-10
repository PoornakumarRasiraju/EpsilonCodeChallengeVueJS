<template>
    <div class="text-input">
        <label class="text-input__label">{{label}}</label>
        <input 
            type="text"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :required="required"
            :value="value"
            @input="input">
    </div>
</template>

<script>
export default {
    name: 'VTextInput',
    props: {
        label: {
            type: String
        },
        value: {
            type: [String, Number],
            default: ''
        },
        maxlength: {
            type: [String, Number]
        },
        placeholder: {
            type: String
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        input(event) {
            const value = event.target.value;
            this.$emit('input', value);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$input-label-color: #333;
$input-border-color: #919da9;
$placeholder-color: #7a8594;

.text-input {
    display: flex;
    flex-direction: column;
}

.text-input__label {
    color: $input-label-color;
    font-size: 12px;
    margin: 0;
}

input[type='text'] {
    border: 1px solid $input-border-color;
    padding-left: 6px;
    min-height: 30px;
    min-width: 260px;
    margin-top: 2px;
    margin-bottom: 20px;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: $placeholder-color;
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: $placeholder-color;
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: $placeholder-color;
}
</style>

<template>
    <div class="text-input">
        <label :for="id" class="text-input__label">{{label}}</label>
        <input 
            type="text"
            :id="id"
            :class="['text__input-type', validation ? 'valid' : 'not-valid']"
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
        id: {
            type: String,
            default: ''
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
        validation: {
            type: Boolean,
            default: true
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
$not-valid-color: red;

.text-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.text-input__label {
    color: $input-label-color;
    font-size: 12px;
    margin: 0;
}

.text__input-type {
    border: 1px solid $input-border-color;
    font-size: 12px;
    font-family: 'Open Sans';
    padding: 6px;
    line-height: 17px;
    margin-top: 2px;
    
    &.not-valid {
        border: 1px solid $not-valid-color;
        outline: none;
    }
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

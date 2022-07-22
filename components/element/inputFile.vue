<script>

export default {
    props: ['fieldId', 'FieldType', 'bindValue', 'placeHolder', 'className', 'modelname', 'password', 'searchKeyup', 'min'],
    emits: ['change'],
    created() {
        console.log(this.modelName)
    },
    methods: {
        getClick(event) {
            console.log(event.target.files)
            this.$emit('change', event);
        }
    }
};
</script>
<template>
    <input type="file" v-bind:class="className" v-bind:name="modelname" v-on:input="modelName = $event.target.value"
        v-on:change="getClick" />

</template>



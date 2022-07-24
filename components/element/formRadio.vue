<template>
    <input type="radio" v-bind:id="idName" v-bind:value="modelName" v-on:input="modelName = $event.target.value"
        v-on:click="getClick">
</template>
<script>
export default {
    props: ['modelName', 'idName', 'value'],
    emits: ['onClick'],
    created() {
        console.log(this.modelName)
    },
    methods: {
        getClick(event) {

            this.$emit('onClick', event.target.value);

        }
    }

};
</script>
<template>
    <select v-on:change="emitbackthecatalog">
        <option value="">Select {{ selectName }}</option>
        <option v-for="item in options" v-bind:selected="item.id == selected" :value="item.id"
            :data-flag="`${item.flag}`" :data-option="`${item.is_system_role}`" :key="item.id">{{ item.title }}</option>
    </select>
</template>
<script>
export default {
    props: ['list', 'selectName', 'options', 'selected'],
    methods: {
        emitbackthecatalog(event) {
            var selected = event.target;
            this.$emit('onChange', selected);
        }
    }
};
</script>
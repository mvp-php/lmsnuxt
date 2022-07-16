<template>

    <span class="slds-roll-table">
        {{ tableData}}
    </span>

</template>

<script>
import dataTable from '../element/dataTable.vue';
export default {
    name: 'role-list',
    props:['header','tableData','no_record_avalible','openViewModel','paginateObj','searchkeyword','pageCount'],
    components:{
        dataTable
    },
    methods:{
        getPaginatesNew:function(currentPage,value){
            this.$parent.getPaginatesMain(currentPage,value);
        },
        viewMethod: function(id) { 
           this.$parent.openViewModel(id);
        },
        deleteMethod: function(id){
            this.$parent.userDelete(id);
        },
        editMethod: function(id){
            this.$parent.userEdit(id);
        },
        bulkDeleted: function(keyDelete){
            this.$parent.bulkDeleteds(keyDelete);
        }
    }
    
}
</script>
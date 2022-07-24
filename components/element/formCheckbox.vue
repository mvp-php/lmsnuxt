<template>

    <input type="checkbox"  v-bind:class="className" v-on:click="getClick" v-bind:value="modelName" v-on:input="modelName = $event.target.value"/>
</template>

<script>
    export default{
        props: ['className','modelName'],
        emits: ['onClick'],
        created(){
           
        },
        data(){
            return{
                checkboxVal:"",
                selectedId:[],
                tempSelected:[]
            }
        },
        methods:{
            onselected(){
               
                if(event.target.checked ==true){
                     console.log(event.target.value);
                    this.tempSelected.push(event.target.value)
                    this.selectedId.push(this.tempSelected);
                    
                } 
            },
            getClick(event){
                if(event.target.checked ==true){
                   var value=event.target.value;
                } else{
                    var value="";
                }
                 this.$emit('onClick', value);
               // this.$emit('onClick',selected);
           
            }
            
           
        }
    };
</script>
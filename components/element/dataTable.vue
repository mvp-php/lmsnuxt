<template>
    <div class="table-main">

        <table aria-multiselectable="true"
            class="group-table1 slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main border-0"
            role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
            <thead>
                <tr class="slds-line-height_reset">

                    <th class=" slds-cell_action-mode" scope="col" v-for="(items) in header" :key="items.Key"
                        :style="[items.Key == '' ? { 'width': '3.25rem' } : {}]"
                        v-bind:class="(items.Key == '') ? ' slds-cell_action-mode' : 'slds-is-resizable slds-is-sortable slds-cell_action-mode'">
                        <div v-if="items.Key == ''">
                            <span id="column-group-header" class="slds-assistive-text">Choose a
                                row</span>
                            <div class="slds-th__action slds-th__action_form p-0">
                                <div class="slds-checkbox">
                                    <input type="checkbox" name="options" id="common" value="1" tabindex="0"
                                        aria-labelledby="check-select-all-label column-group-header"
                                        @click="checkAll()" />
                                    <label class="slds-checkbox__label" for="common" id="check-select-all-label">
                                        <span class="slds-checkbox_faux"></span>
                                        <span class="slds-form-element__label slds-assistive-text">Select
                                            All</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="dd1" v-else>
                           
                                <span class="slds-assistive-text">Sort by: </span>
                                <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                    <span class="slds-truncate" title="Name">{{ items.Key }}</span>

                                    <div style="position: relative;padding-left: 6px;">
                                        <a style="position: absolute;top: 3px;left: 6px;right: 0;"  class="slds-icon_container slds-icon-utility-arrowdown" href="javascript:void(0)" @click="detailViewActive(items.column,'ASC')" role="button" tabindex="0"><imageComponent :log="require('/assets/img/svg/top.svg')"></imageComponent></a>
                                        <a style="top: 0;padding-top: 10px;z-index: 99;border: 0;"  class="slds-icon_container slds-icon-utility-arrowdown" href="javascript:void(0)" @click="detailViewActive(items.column,'DESC')" role="button" tabindex="0"><imageComponent :log="require('/assets/img/svg/bottom.svg')"></imageComponent></a>
                                    </div>

                                </div>
                           
                            <div class="slds-resizable">
                                <input type="range" aria-label="Name column width"
                                    class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-533"
                                    max="1000" min="20" tabindex="0" />

                            </div>
                        </div>

                    </th>
                </tr>
            </thead>
            <tbody>

                <tr aria-selected="false" v-if="tableData.length != 0" class="slds-hint-parent"
                    v-for="(item, key) in tableData" :key="item.id">
       
                    <td class="slds-cell_action-mode" role="gridcell" v-for="(column, k) in item" 
                        v-bind:class="(column == '') ? 'slds-pl-20 slds-cell_action-mode' : 'slds-cell_action-mode'"
                        v-if="k != 'is_system_role'"    :key="column">
                         
                        <div v-if="column === ''">
                            <div class="slds-checkbox cus-check1">
                                <input type="checkbox" name="options[]" :id="`${item.id}`" :value="`${item.id}`"
                                    tabindex="0" aria-labelledby="check-button-label-01 column-group-header"
                                    class="allselect" @click="Unselect()" />

                                <label class="slds-checkbox__label" :for="`${item.id}`" :id="`${item.mid}`">
                                    <span class="slds-checkbox_faux"></span>
                                    <span class="slds-form-element__label slds-assistive-text">Select
                                        item 1</span>
                                </label>
                            </div>
                        </div>
                        <div v-else-if="k == 'id'" class="">
                            {{ ((paginateObjs.current_page - 1) * paginateObjs.per_page) + key + 1 }}
                        </div>

                        <div v-else-if="k != 'is_system_role' && k != 'created_at' && k != 'parent_category_id'">

                            <div class="slds-truncate" title="4">{{ column }}</div>
                        </div>
                        <div v-else-if="k == 'created_at'">

                            <div class="slds-truncate" title="4">{{ convertDate(column) }}</div>
                        </div>

                        <div v-else-if="k == 'parent_category_id'" class="">
                            <a v-on:click="openSubCategoryModel(item.id)" href="javascript:void(0)"
                                class="btn btn-table-add"> <img src="../../assets/img/svg/plus-add.svg" alt="add-img"
                                    class="all-img-add"> add </a>
                        </div>

                    </td>

                    <td class="slds-cell_action-mode" role="gridcell">
                        <div class="slds-truncate" v-if="item.is_system_role != '1'">
                            <div class="action-main">
                                <ul class="action-ul">
                                    <li>
                                        <a class="" title="View" href="javascript:void(0)"
                                            v-on:click="openViewModel(item.id)">
                                            <imageComponent :log="require('~/assets/img/svg/eye-blue.svg')">
                                            </imageComponent>
                                        </a>

                                    </li>
                                    <li>
                                        <a class="" title="Edit" href="javascript:void(0)"
                                            v-on:click="openEditModel(item.id)">
                                            <imageComponent :log="require('~/assets/img/svg/edit.svg')">
                                            </imageComponent>
                                        </a>

                                    </li>

                                    <li> <a class="" title="Delete" href="javascript:void(0)"
                                            v-on:click="openDeleteModel(item.id)">
                                            <imageComponent :log="require('~/assets/img/svg/delete.svg')">
                                            </imageComponent>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr aria-selected="false" v-if="tableData.length == 0" class="slds-hint-parent">
                    <td class="slds-cell_action-mode slds-text-align_center" :colspan="header.length" role="gridcell">
                        {{ no_record_avalible }}
                    </td>
                </tr>
            </tbody>
        </table>
        
        <Paginate :paginateObjFinal="paginateObjs" :searchKeyword="searchKeyword" :pageCount="pageCount"  :field="field" :sort="sort"/>
    </div>

</template>

<script>
import Paginate from '../../components/element/Paginate.vue';
import imageComponent from '../../components/element/image.vue';
import moment from 'moment';
export default {
    name: "Data-table",
    props: ['header', 'tableData', 'no_record_avalible', 'paginateObjs', 'searchKeyword', 'pageCount'],

    data() {
        return {
            selectedValue: [],
            selectedChecked: [],
            field:'',
            sort:'',
            currentPage:'',
            value:''
        }
    },
    components: {
        Paginate,
        imageComponent,

    },

    methods: {
        getPaginates: function (currentPage, value) {
             this.$parent.getPaginatesNew(currentPage,value);
        },
        openViewModel(id) {
            this.$parent.viewMethod(id);
        },
        openDeleteModel(id) {
            this.$parent.deleteMethod(id);
        },
        openEditModel(id) {

            this.$parent.editMethod(id);
        },
        convertDate(date) {
            return moment(date).format('MM-DD-YYYY');
        },
        checkAll() {
            var slides = document.getElementsByClassName("allselect");
            if (event.target.checked == true) {


                for (var i = 0; i < slides.length; i++) {
                    slides[i].checked = true;
                    this.selectedValue.push(slides[i].id);
                }
            } else {
                for (var i = 0; i < slides.length; i++) {
                    slides[i].checked = false;
                    this.selectedValue = [];
                }
            }
            this.bulkUserDelete(this.selectedValue);
        },
        Unselect() {

            var selectedChecked = [];
            if (event.target.checked == false) {
               
                this.selectedValue.filter(function (elm) {

                    if (event.target.value != elm) {
                        console.log(event.target.value + '=====' + elm);
                        selectedChecked.push(elm);
                    } 
                });
                  this.selectedValue = selectedChecked;
            } else {
                
                this.selectedValue.push(event.target.value);
            }
          
            this.bulkUserDelete(this.selectedValue);
        },
        bulkUserDelete(keyArray) {
            this.$parent.bulkDeleted(keyArray);
        },
        openSubCategoryModel(id) {
            this.$parent.getsOpenSubcategoryModel(id);
        },
        detailViewActive(field,sort){
            this.field=field;
            this.sort=sort;
         console.log(field)
           
        }

    }
} 
</script>
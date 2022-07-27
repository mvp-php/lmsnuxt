<template>
    <div class="slds-modal__content slds-p-around_medium modal-content-group-view" id="modal-content-id-1">
        <div class="modal-manage-group-main">
            <div class="group-row-main">
                <div class="group-col1">
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Course title</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">{{ viewCourse.title}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Course description</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">{{ viewCourse.description}}.</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage mb-20">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Instructor name</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">John Doe</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage mb-20">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Course price</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">USD {{ viewCourse.price}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Course tag</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">Basic</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Category Info</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <button class="slds-button slds-button_neutral btn-show-hide-course"
                                    id="btn-show">Show</button>
                                <button class="slds-button slds-button_neutral btn-show-hide-course m-0"
                                    id="btn-hide" style="display: none;">hide</button>
                            </div>
                            <div id="category-hide-show" style="display:none;">
                                <div class="category-main-sec">
                                    <div class="category-titles">
                                        <p class="mb-0">Major Category</p>
                                    </div>
                                    <div class="category-flex">
                                        <label class="slds-form-element__label custom-category-label">Fraud
                                            Management and Cybercrime</label>
                                        <label
                                            class="slds-form-element__label custom-category-label">Governance
                                            & Risk Management</label>
                                        <label
                                            class="slds-form-element__label custom-category-label">Security
                                            Options</label>
                                        <label
                                            class="slds-form-element__label custom-category-label">Endpoint
                                            Security</label>
                                    </div>
                                </div>
                                <div class="category-main-sec">
                                    <div class="category-titles">
                                        <p class="mb-0">Sub - Category</p>
                                    </div>
                                    <div class="category-flex">
                                        <label class="slds-form-element__label custom-category-label">ATM
                                            Fraud</label>
                                        <label class="slds-form-element__label custom-category-label">ACH
                                            Fraud</label>
                                        <label class="slds-form-element__label custom-category-label">Social
                                            Media</label>
                                        <label
                                            class="slds-form-element__label custom-category-label">Cybercrime</label>
                                        <label class="slds-form-element__label custom-category-label">API
                                            Security</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group-col2">
                    <div class="img-section-manage mb-16px">
                        <div class="img-tag-thumnails">
                            <imageComponent :log="viewCourse.image_name" alt=""></imageComponent>
                        </div>
                        <div class="title-cources-thumbh">
                            <p class="mb-0">Course thumbnail</p>
                        </div>
                    </div>
                    <div class="video-section-manage mb-16px">
                        <div class="video-tag-thumnails">
                            <videoComponent></videoComponent>
                           
                        </div>
                        <div class="video-cources-thumbh">
                            <p class="mb-0">Instructor intro video</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-modal-manages">
                <table class="slds-table slds-table_cell-buffer slds-table_bordered table-modal-group"
                    aria-labelledby="element-with-table-label other-element-with-table-label">
                    <thead>
                        <tr class="slds-line-height_reset">
                            <th class="" scope="col">
                                <div class="slds-truncate" title="Module no.">Module no.
                                </div>
                            </th>
                            <th class="" scope="col">
                                <div class="slds-truncate" title="Module name">Module name</div>
                            </th>
                            <th class="" scope="col">
                                <div class="slds-truncate" title="Chapter no.">Chapter no.</div>
                            </th>
                            <th class="" scope="col">
                                <div class="slds-truncate" title="Chapter name">Chapter name</div>
                            </th>
                            <th class="" scope="col">
                                <div class="slds-truncate" title="Format">Format</div>
                            </th>
                            <th class="" scope="col">
                                <div class="slds-truncate" title="Time">Time</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="slds-hint-parent">
                            <th data-label="Opportunity Name" scope="row">
                                <div class="slds-truncate" title="Cloudhub">
                                    1
                                </div>
                            </th>
                            <td data-label="Account Name">
                                <div class="slds-truncate" title="Basics for beginners">Basics for
                                    beginners</div>
                            </td>
                            <td data-label="Close Date">
                                <div class="slds-truncate" title="1">1</div>
                            </td>
                            <td data-label="Prospecting">
                                <div class="slds-truncate" title="Install Python IDE">Install Python
                                    IDE</div>
                            </td>
                            <td data-label="Confidence">
                                <div class="slds-truncate" title="Video">Video</div>
                            </td>
                            <td data-label="Amount">
                                <div class="slds-truncate" title="9 min">9 min</div>
                            </td>
                        </tr>
                        <tr class="slds-hint-parent">
                            <th data-label="Opportunity Name" scope="row">
                                <div class="slds-truncate" title="2">
                                    2
                                </div>
                            </th>
                            <td data-label="Account Name">
                                <div class="slds-truncate" title="Basics for beginners">Basics for
                                    beginners </div>
                            </td>
                            <td data-label="Close Date">
                                <div class="slds-truncate" title="2">2</div>
                            </td>
                            <td data-label="Prospecting">
                                <div class="slds-truncate" title="Python Hello World">Python Hello
                                    World</div>
                            </td>
                            <td data-label="Confidence">
                                <div class="slds-truncate" title="Document">Document</div>
                            </td>
                            <td data-label="Amount">
                                <div class="slds-truncate" title="5 min">5 min</div>
                            </td>
                        </tr>
                        <tr class="slds-hint-parent">
                            <th data-label="Opportunity Name" scope="row">
                                <div class="slds-truncate" title="3">
                                    3
                                </div>
                            </th>
                            <td data-label="Account Name">
                                <div class="slds-truncate" title="Intermediate">Intermediate</div>
                            </td>
                            <td data-label="Close Date">
                                <div class="slds-truncate" title="3">3</div>
                            </td>
                            <td data-label="Prospecting">
                                <div class="slds-truncate" title="Python () function">Python ()
                                    function</div>
                            </td>
                            <td data-label="Confidence">
                                <div class="slds-truncate" title="Video">Video</div>
                            </td>
                            <td data-label="Amount">
                                <div class="slds-truncate" title="30 min">30 min</div>
                            </td>
                        </tr>
                        <tr class="slds-hint-parent">
                            <th data-label="Opportunity Name" scope="row">
                                <div class="slds-truncate" title="4">
                                    4
                                </div>
                            </th>
                            <td data-label="Account Name">
                                <div class="slds-truncate" title="Intermediate">Intermediate</div>
                            </td>
                            <td data-label="Close Date">
                                <div class="slds-truncate" title="4">4</div>
                            </td>
                            <td data-label="Prospecting">
                                <div class="slds-truncate" title="Python variables">Python variables
                                </div>
                            </td>
                            <td data-label="Confidence">
                                <div class="slds-truncate" title="Document">Document</div>
                            </td>
                            <td data-label="Amount">
                                <div class="slds-truncate" title="5 min">5 min</div>
                            </td>
                        </tr>
                        <tr class="slds-hint-parent">
                            <th data-label="Opportunity Name" scope="row">
                                <div class="slds-truncate" title="5">
                                    5
                                </div>
                            </th>
                            <td data-label="Account Name">
                                <div class="slds-truncate" title="Python data structures">Python
                                    data structures</div>
                            </td>
                            <td data-label="Close Date">
                                <div class="slds-truncate" title="5">5</div>
                            </td>
                            <td data-label="Prospecting">
                                <div class="slds-truncate" title="Quiz">Quiz</div>
                            </td>
                            <td data-label="Confidence">
                                <div class="slds-truncate" title="Video">Video</div>
                            </td>
                            <td data-label="Amount">
                                <div class="slds-truncate" title="5 min">5 min</div>
                            </td>
                        </tr>
                        <tr class="slds-hint-parent">
                            <th data-label="Opportunity Name" scope="row">
                                <div class="slds-truncate" title="6">
                                    6
                                </div>
                            </th>
                            <td data-label="Account Name">
                                <div class="slds-truncate" title="Python data structures">Python
                                    data structures</div>
                            </td>
                            <td data-label="Close Date">
                                <div class="slds-truncate" title="6">6</div>
                            </td>
                            <td data-label="Prospecting">
                                <div class="slds-truncate" title="Python TUPLE">Python TUPLE</div>
                            </td>
                            <td data-label="Confidence">
                                <div class="slds-truncate" title="Document">Document</div>
                            </td>
                            <td data-label="Amount">
                                <div class="slds-truncate" title="5 min">5 min</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import  imageComponent  from    '../../components/element/image.vue';
import  videoComponent  from    '../../components/element/video.vue';
export default {
    props: ['viewCourse'],
    components: {
        imageComponent,
        videoComponent
    }
}

</script>
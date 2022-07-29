export { default as Login } from '../..\\components\\Login.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Category } from '../..\\components\\Category\\category.vue'
export { default as CategoryCreateCategory } from '../..\\components\\Category\\create_category.vue'
export { default as CategoryEditCategory } from '../..\\components\\Category\\edit_category.vue'
export { default as ConfigAuthHeader } from '../..\\components\\config\\AuthHeader.js'
export { default as ConfigDataService } from '../..\\components\\config\\DataService.js'
export { default as CourseList } from '../..\\components\\Course\\courseList.vue'
export { default as CourseView } from '../..\\components\\Course\\courseView.vue'
export { default as CourseCreateCource } from '../..\\components\\Course\\createCource.vue'
export { default as Dashboard } from '../..\\components\\Dashboard\\dashboard.vue'
export { default as ElementDataTable } from '../..\\components\\element\\dataTable.vue'
export { default as ElementDropzone } from '../..\\components\\element\\Dropzone.vue'
export { default as ElementErrorToastr } from '../..\\components\\element\\errorToastr.vue'
export { default as ElementFormButton } from '../..\\components\\element\\formButton.vue'
export { default as ElementFormCheckbox } from '../..\\components\\element\\formCheckbox.vue'
export { default as ElementFormDropdown } from '../..\\components\\element\\formDropdown.vue'
export { default as ElementFormLabel } from '../..\\components\\element\\formLabel.vue'
export { default as ElementFormRadio } from '../..\\components\\element\\formRadio.vue'
export { default as ElementFormTextBoxField } from '../..\\components\\element\\formTextBoxField.vue'
export { default as ElementFormTynymc } from '../..\\components\\element\\formTynymc.vue'
export { default as ElementImage } from '../..\\components\\element\\image.vue'
export { default as ElementInputFile } from '../..\\components\\element\\inputFile.vue'
export { default as ElementLoadingBar } from '../..\\components\\element\\LoadingBar.vue'
export { default as ElementNuxtLink } from '../..\\components\\element\\NuxtLink.vue'
export { default as ElementPaginate } from '../..\\components\\element\\Paginate.vue'
export { default as ElementSuccessToastr } from '../..\\components\\element\\successToastr.vue'
export { default as ElementTabs } from '../..\\components\\element\\Tabs.vue'
export { default as ElementTextArea } from '../..\\components\\element\\textArea.vue'
export { default as ElementVideo } from '../..\\components\\element\\video.vue'
export { default as ForgotPassword } from '../..\\components\\ForgotPassword\\forgotPassword.vue'
export { default as IncludeFooter } from '../..\\components\\Include\\Footer.vue'
export { default as IncludeHeader } from '../..\\components\\Include\\Header.vue'
export { default as IncludeSidebar } from '../..\\components\\Include\\Sidebar.vue'
export { default as LearningPathManagmentCreate } from '../..\\components\\LearningPathManagment\\create.vue'
export { default as LearningPathList } from '../..\\components\\LearningPathManagment\\learningPathList.vue'
export { default as LearningPathManagmentViewLearning } from '../..\\components\\LearningPathManagment\\viewLearning.vue'
export { default as Profile } from '../..\\components\\Profile\\profile.vue'
export { default as ProfileUpdatePassword } from '../..\\components\\Profile\\update_password.vue'
export { default as ResetPassword } from '../..\\components\\ResetPassword\\resetPassword.vue'
export { default as RoleCreateRole } from '../..\\components\\Role\\create_role.vue'
export { default as RoleEditRole } from '../..\\components\\Role\\edit_role.vue'
export { default as Role } from '../..\\components\\Role\\Role.vue'
export { default as RoleSetDefaultRoles } from '../..\\components\\Role\\set_default_roles.vue'
export { default as RoleViewRole } from '../..\\components\\Role\\view_role.vue'
export { default as ServiceAuthService } from '../..\\components\\Service\\AuthService.js'
export { default as ServiceCategoryService } from '../..\\components\\Service\\CategoryService.js'
export { default as ServiceCourseService } from '../..\\components\\Service\\CourseService.js'
export { default as ServiceDocumentUpload } from '../..\\components\\Service\\DocumentUpload.js'
export { default as ServiceInstructorService } from '../..\\components\\Service\\InstructorService.js'
export { default as ServiceLearningPathService } from '../..\\components\\Service\\LearningPathService.js'
export { default as ServicePaymentPlanService } from '../..\\components\\Service\\PaymentPlanService.js'
export { default as ServiceRoleDataService } from '../..\\components\\Service\\RoleDataService.js'
export { default as ServiceSubcategoryService } from '../..\\components\\Service\\SubcategoryService.js'
export { default as ServiceUserService } from '../..\\components\\Service\\UserService.js'
export { default as SetPassword } from '../..\\components\\SetPassword\\setPassword.vue'
export { default as SubCategoryCreateSubCategory } from '../..\\components\\SubCategory\\create_sub_category.vue'
export { default as SubCategoryEditSubCategory } from '../..\\components\\SubCategory\\edit_sub_category.vue'
export { default as SubCategoryList } from '../..\\components\\SubCategory\\sub_category_list.vue'
export { default as UserCreateUser } from '../..\\components\\User\\create_user.vue'
export { default as UserEditUser } from '../..\\components\\User\\edit_user.vue'
export { default as UserImportCsv } from '../..\\components\\User\\import_csv.vue'
export { default as UserImportUserList } from '../..\\components\\User\\import_user_list.vue'
export { default as UserList } from '../..\\components\\User\\user_list.vue'
export { default as UserViewUser } from '../..\\components\\User\\viewUser.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

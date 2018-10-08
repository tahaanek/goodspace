import registrationForm from './components/module/regis_form.vue'
import home from './components/module/home.vue'
import childrenForm from './components/module/children_form.vue'
//import vaccineForm from './components/module/vaccineForm.vue'

export default [
    { path:'/', component: home },
    { path:'/registration', component: registrationForm }, 
    { path:'/children', component: childrenForm },
    //{ path: '/vaccine', component: vaccineForm }
]
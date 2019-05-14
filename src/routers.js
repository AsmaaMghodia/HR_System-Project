import get_all from './components/get_all.vue'

import add_employee from './components/add_employee.vue'
import delete_employee from './components/delete.vue'
import update from './components/update.vue'

export default [
    { path: '/data', component: get_all },
    { path: '/creat/data', component: add_employee },

    { path: '/delete', component: delete_employee },
    { path: '/update', component: update },



]
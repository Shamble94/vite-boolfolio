import { createRouter, createWebHistory} from "vue-router";

import AppHome from "./pages/AppHome.vue"
import ProjectsList from "./pages/ProjectsList.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            "path" : "/",
            "name" : "home",
            component: AppHome
        },
        {
            "path" : "/project",
            "name" : "Projects",
            component: ProjectsList
        }
    ]

})

export { router }
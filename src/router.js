import { createRouter, createWebHistory} from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import AppNotFound from "./pages/AppNotFound.vue";
import SingleProject from "./pages/SingleProject.vue";

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
        },
        
        {
            "path" : "/project/:id",
            "name" : "SingleProject",
            component: SingleProject
        },
        {
            "path" : "/:catchAll(.*)",
            "name" : "not-found",
            component: AppNotFound
        }
    ]

})

export { router }
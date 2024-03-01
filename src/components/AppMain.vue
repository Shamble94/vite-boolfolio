<script>

import ProjectCard from "./ProjectCard.vue";
import { store } from "../store.js"
import axios from "axios";

export default {
    name: "AppMain",
    components: {
        
        ProjectCard
    },

    data(){
        return {
            store,
            projects: []
        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(){
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
               this.projects = response.data.results.data;

            })
        }
    }
}

</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">

                <h1>Boolfolio</h1>
                <h4>Raccolta dei progetti </h4>
            </div>
        </div>
        <div class="row">
            <ProjectCard v-for="project, index  in projects" :key="index" :project="project"/>
        </div>
    </div>
  
</template>
    
<style  lang="scss" scoped>

  
</style>
    
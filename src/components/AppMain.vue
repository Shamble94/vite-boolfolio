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
            projects: [],
            currentPage: 1,
            lastPage: null

        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(page_number){
            axios.get(`${this.store.baseUrl}/api/projects`,
            {
                params:{
                    page : page_number
                }
            }).then((response) => {
               this.projects = response.data.results.data;
               this.currentPage = response.data.results.current_page;
               this.lastPage = response.data.results.last_page;

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
                <button class="btn btn-sm btn-primary mx-3" :class="currentPage == 1 ? `disabled` : ``" @click="getProjects(currentPage - 1)">Indietro</button>
                <button class="btn btn-sm btn-primary"  :class="currentPage == lastPage ? `disabled` : ``" @click="getProjects(currentPage + 1)">Avanti</button>
            </div>
        </div>
       
            
        
      
        <div class="row">
            <ProjectCard v-for="project, index  in projects" :key="index" :project="project"/>
        </div>
    </div>
</template>
    
<style  lang="scss" scoped>

  
</style>
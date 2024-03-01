<script>
import Projects from "./Projects.vue";
import { store } from "../store.js"
import axios from "axios";

export default {
    name: "AppMain",
    components: {
        Projects
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
                console.log(response.data.results);
            })
        }
    }
}

</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">

                <h1>Boolfolio</h1>
            </div>
        </div>
    </div>
  <Projects />
</template>
    
<style  lang="scss" scoped>

  
</style>
    
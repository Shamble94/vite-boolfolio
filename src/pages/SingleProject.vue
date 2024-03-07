<script>
import { store } from "../store.js"
import axios from "axios";

export default {
    name: "SingleProject",

    data(){
        return {
            store,
            project: null,
            loader: false,
        }
    },
    created(){
        this.getProjectInfo();
       
    },
    methods:{
        getProjectInfo(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.id}`)
            .then((response) => {
                console.log(response);
                this.project = response.data.results;
                this.loader = true;
               
            })
            }
    }
}

</script>
<template lang="">
    <div class="container" v-if="loader">
        
        <div class="row">
            <div class="col-4 m-5">
              
                    <h1> Marca: </h1>  {{ project.name }}
                   <!--  <h1> Modello: </h1> {{ car.modello }}
                    <h1> Prezzo</h1> {{ car.prezzo }}€ -->
                    <img :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="my-3">  
                  
                    
            </div>
        
        </div>
    </div>
</template>
    
<style  lang="scss" scoped>
   img{
    width: 400px;
   }
</style>
    
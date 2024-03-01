<script>
import {store} from "../store.js"
export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    },
    methods:{
        getUrlImage(){
            let image;

            if(this.project.cover_image != null) {
                image = "/storage/" + this.project.cover_image;
            }
            else {
                image = "/img/placeholder.png"
            }

            return `${this.store.baseUrl}${image}`
            
        }
    }
    
}

</script>
<template lang="">
    <div class="container">
        <div class="row ">
            <div class="col-12 col-md-3">

                <div class="card mt-4">
                    <img :src="getUrlImage()" alt="" class="card-img-top">
                </div>
                <div class="card-body">

                    <h4> Nome Progetto: </h4>{{ project.name }}
                    <h4 class="my-2"> Descrizione: </h4>{{ project.description }}
                    <h5> Assegnato da: </h5>{{ project.assigned_by}} 
                    <h5 class = "my-2">Tipologia Progetto: </h5>{{ project.type.name}} <hr><hr>
                    <!-- <h5> {{ project.technologies}}</h5> -->
                </div>
            </div>
        </div>
    </div>
</template>
    
<style  lang="">
    
</style>
    
<template>
<div id="container">



    <div id="head">

        <div class="hleft">

    <h1>{{project.ProjectName}}</h1>

    <img :src="project.image_url" alt="">
    </div>


    <div class="hright">
        <p>{{project.description}}</p>
        
    <button @click="redirectS">   View Project Source Code  </button>

    

</div>



     </div>


<br/>
    <div class="gallery">
        <img v-for="img in project_imgs" :key="img.id" :src="img.image_url" alt="">

    </div>
</div>


    
</template>

<script>

import axios from 'axios'
export default {

    data(){
        return {
            project: [],

            project_imgs: [], 

        }
    },

    async mounted(){
        

        const project_slug = this.$route.params.project_slug
        await axios.get(`projects/${project_slug}`)
        .then(request=> {
            this.project= request.data

        })
        await axios.get(`projectimg/${project_slug}`)
        .then(request=>{
            this.project_imgs= request.data
        })

        

    

    },

    methods: {
        redirectS(link){
            window.location.href = this.project.source_code
        },

        redirectW(link){
            window.location.href = this.project.website
        }
    }
    
}
</script>

<style>






body{
    background-color : lightskyblue;

}







 #head img{
    width:70%;
    margin-left: 20px;
    border-radius: 7px;
    margin: auto;
    

}


#head{
    background-color: pink;
    margin: 20px;
    margin-top: 90px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    border-color: green;

}

#container h1{
    font-size: 3em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 10px;
    align-self: flex-start;


}

.hleft{
    width: 60vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-right: 20px;

    
}

.hright{
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#head p{
    background-color: white;
    border-radius: 10px;
    margin-top : 10px;
    margin-right: 50px;
    padding: 20px;
}


#head button{
    border-radius: 20px;
    height: 5vh;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top:15px;
    background: white;
    border: 1px solid white;
    font-family: 'Courier New', Courier, monospace;
    margin-top : 10px;
    margin-right: 50px;
}

#head button:hover{
    background-color: lightgray;
    border: 1px solid lightblue

}

.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.gallery img {
  width: 100%;
  max-width: 40vw;
  border-radius: 5px;
  border: 1px solid white;
}


@media (max-width: 1100px){
    #head h1{
        font-size: 2em;
    }

}

@media (max-width: 600px){
    #head h1{
        font-size:1.5em;
    }

}

@media (max-width: 700px){

    *{
        margin: 0px;
        padding: 0px;
    }

    #head{
        flex-direction: column;
    }
    #head img{
        width: 80vw;
    }

    #head h1{
        font-size: 2em;
        display: flex;
    }
    .hright{
        width: 90vw;
    }
    .vleft{
        width: 90vw;
        margin-bottom: 1vh;
    }
    #head p{
        margin-bottom: 1vh;
    }
    #head h1{
        text-align: center;
    }

    .gallery img{
        width: 100%;
        max-width: 83vw;
    }

}


</style>
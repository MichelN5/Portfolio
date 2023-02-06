<template>


        <nav id="navbar">
            <ul>
                <li><a href="/#welcome-section">About</a></li>
                <li><a href="/#projects">Work</a></li>
                <li><a href="/#footer">Contact</a></li>
            </ul>

        </nav>

        <router-view/>


        



  
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    animation-name: fade-in;
	animation-duration: 2s;	


  
  }

#navbar {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: rgb(82, 87, 252);
    align-items: center;
    position: fixed;
    top: 0;
    overflow: hidden;
}


ul{
    list-style: none;
}

li a{
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
}
li{
    display: inline;
    margin-left: 30px;

}
li:last-of-type {
    margin-right: 30px;
}

main{
    margin-top: 65px;
}

#welcome-section{
    height: calc(100vh - 65px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://img.freepik.com/premium-photo/digital-cyberspace-with-particles-digital-data-network-connections_24070-1303.jpg?w=2000");
    flex-direction: column;
    background-image: url("https://cdn.pixabay.com/photo/2021/06/29/06/14/water-drops-6373296_960_720.jpg");
    background-size: cover;
    text-align: center;
}


#welcome-section h1{
    font-size: 3rem;
    color: white;
    font-family: Tahoma;
}


#projects  h1{
    font-size: 2.4rem;
    text-align: center;
    font-family: Tahoma, sans-serif;
    margin-bottom: 50px;
    color: white;

}

.projects-flex{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 39px;
    
    
}

#projects{
    background-color: #5885e0;
    padding-top:80px;
    padding-bottom: 70px;
}

#projects h2{
    text-align: center;
    padding: 14px 0;
}

.project-tile img{
    object-fit: cover;
    height: 100%;
    width: 100%;
}
.project-tile{
    background-color: #b34d8f;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 2px solid white;
    border-radius: 5px;
    color:white;
    transition: 0.3s;
    

}
.project-tile:hover{
    scale: 1.05;
    cursor: pointer;
}

#footer{
    background-color: lightblue;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}

#footer h1{
    font-size: 3.4rem;
    text-align: center;
    color: white;
    font-family: Tahoma ;
}

.socials {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
}


.socials svg{
    height: 35px;
    
}

.social:hover{
    scale: 1.1;
    cursor: pointer;
}

.social{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.6rem;
    color: white;
    transition: 0.3s;
}


@media (min-width: 1100px){
    .project-tile{
        width: 27%
    }


    #welcome-section h1{
        font-size: 4rem;
    }

    #projects h1{
        font-size: 3rem;
    }

    #footer h1{
        font-size: 5rem
    }
    .social{
        font-size: 2.5rem;
    }




}

@media (max-width: 400px){
    section{
        width: 140vw;
    }
}

@media (max-width: 300px){
    section{
        width: 180vw;
    }
}

@keyframes fade-in {
	from {opacity: 0.6;}
	to {opacity: 1;}
}



</style>

        <script>
            export default {
                props: ['producto'],
                
            }
        </script>
<template>
    <div class="containerCard">
          
            <div class="container" v-for="(el, i) in producto" :key="i">
                
                    <img class="img" :src="el.image" alt="imagen">
                
                <div class="contContent">
                    <h3>{{el.title}}</h3>
                </div>
                <button class="button">Agregar al carrito</button>
            </div>
        
    </div>
</template>
<style>
.containerCard{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    padding-top: 2rem;
}
.container{
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    margin: 0 2rem;
    
    border-radius: 2rem;
    text-align: center;
    background-color: #ffff;
}
.img{
    width: 10rem;
    height: 12rem;
}

</style>

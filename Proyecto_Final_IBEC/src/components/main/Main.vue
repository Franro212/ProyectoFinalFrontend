        <script>
        import FooterVue from '../footer/Footer.vue'
export default {
    name: "Main",
        components: { FooterVue },
        data () {
            return {
                buscar: ''
                


            }
        },
        computed: {
   async filtrar() {
 
        return  await this.$store.state.productos.filter(producto => {
        return producto.nombre.includes(this.buscar);
      });
      
    }
  }

    }





        </script>
<template>
        <header class="header" >
        <img src="../../assets/logo-removebg-preview.png" alt="logo" class="logo">
            <input
             type="text"
            class="input"
            v-model="buscar"
             placeholder="Buscar articulos..."
            />
            <nav class="nav">
                    <ul class="list">
                        <li><a href="">crea tu cuenta</a></li>
                        <li><a href="">ingresar</a></li>
                        <li><a href="">mis compras</a></li>
                    </ul>
                </nav>

            </header>
    <div class="containerCard" >


            <div class="container" v-for="(el, i) in this.$store.state.productos" :key="i">

                    <img class="img" :src="el.image" alt="imagen">

                <div class="contContent">
                    <h3>{{el.title}}</h3>
                </div>
                <button class="button">Agregar al carrito</button>
            </div>
    </div>
    <div class="item error" v-if="buscar&&!filtrar().length">
     <p>No se encuentran resultados</p>
  </div>
<FooterVue/>
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

.header{
    background-color:#FFF159 ;
    height: 6rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 8rem;

}
.input{
    width: 30rem;
    height: 2rem;
    border-radius:0.5rem;
    border: solid 2px ;
}
.list{
    display: flex;
    gap: 5rem;
    text-transform: uppercase;
    list-style: none;

}
.list a{
    text-decoration: none;
    color: #000000;
}
.logo{
    height: 5rem;
}
</style>

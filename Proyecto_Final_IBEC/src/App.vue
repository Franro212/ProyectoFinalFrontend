
<script>



import Home from './components/home/Home.vue';

export default {
        name: "App",
        components: { Home },
        data () {
            return {
                productos: [],

            }
        },  
        beforeCreate() {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> this.$store.state.productos = json )
        },
        
        

    }
  



</script>
<template>
<RouterView/>
<div>

  <Home/>
</div>



</template>
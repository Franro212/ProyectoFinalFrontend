
<script>

import Header from './components/header/Header.vue';
import Main from './components/main/Main.vue';

export default {
        name: "Home",
        components: { Header, Main },
        data () {
            return {
                productos: [],

            }
        },  
        beforeCreate() {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> this.productos = json )
        }

    }
  



</script>
<template>
<Header :producto="productos"/>
<main>
    <Main :producto="productos"/>

</main>
<footer>

</footer>




</template>
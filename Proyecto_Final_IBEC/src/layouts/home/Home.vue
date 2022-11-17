    <script>
    import Card from '../../components/card/Card.vue';
import Header from '../../components/header/Header.vue';

    
    export default {
            name: "Home",
            components: {Card, Header},
            data () {
                return {
                    productos: []
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
    <Header/>
    <main>
        <Card :producto="productos"/>

    </main>
    <footer>

    </footer>




</template>


<style>
main{
    width: 100%;
    
    
    
}

</style>
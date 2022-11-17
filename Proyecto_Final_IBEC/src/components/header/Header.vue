<template>

<header class="header" >
<img src="../../assets/logo-removebg-preview.png" alt="logo" class="logo">
    <input type="search" class="input"/>
    <nav class="nav">
            <ul class="list">
                <li><a href="">crea tu cuenta</a></li>
                <li><a href="">ingresar</a></li>
                <li><a href="">mis compras</a></li>
            </ul>
        </nav>

    </header>
</template>
<style>
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
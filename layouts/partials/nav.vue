<template>
    <header>
        <nuxt-link to="/" class="logo">LOGO</nuxt-link>
        <nav>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/component">Components</nuxt-link></li>
                <li><nuxt-link to="/middleware">Middleware</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    
}
</script>

<style>

</style>
<style lang="postcss">
    header {
        background: #222;
        display: grid;
        grid-template-columns: repeat(2, auto);
    }
    .logo, li a {
        padding: 1em 2em;
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        color: white;
        font-size: .9em;
    }
    nav {
        justify-self: right;
    }
    ul {
        list-style-type: none;
    }
    li {
        display: inline;
    }
    li a {
        padding: 1em 2em;
        display: inline-block;
        background: rgba(0,0,0,0.1);
    }    
</style>
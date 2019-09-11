<template>
    <div class="top">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<style lang="less">
.top{
    background: #000;
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
            color: #42b983;
            }
        }
    }
}
</style>

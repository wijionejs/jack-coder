<template>
    <h1>Hello from {{$store.getters.getHello}}</h1>
</template>

<script>
export default {
    data() {
        return {
            title: "vue"
        }
    }
}
</script>

<style lang="scss" scoped>
    $mainColor: red;

    h1 {
        color: $mainColor;
    }
</style>

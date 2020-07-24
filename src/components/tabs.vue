<template lang="pug">
    tabs
        ul.list
            li.item(v-for="tab in tabs")
                a(href="").link {{tab}}
</template>

<script>
export default {
    data(){
        return{
            tabs: ["Главная","Вина","Пользователи","Сценарии"]
        }
    }
}
</script>

<style src="" lang="scss" scoped>

</style>
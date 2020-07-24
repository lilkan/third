<template lang="pug">
    tr
        td {{skill.name}}
        td
            input(type="text" :value="skill.percent")
        td %
        td
            button(type="button") удалить
</template>
<script>
export default {
    props: {
        skill: Object 
    }
}
</script>
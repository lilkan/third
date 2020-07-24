<template lang="pug">
    about
        skills-list(
            v-for="(skillType, index) in skillTypes"
            :key="index"
            :skillType="skillType"
            :skills="skills"
        )
</template> 

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data(){
        return {
            skillTypes: ['frontend', 'backend', 'workflow'],
        }
    },
    methods: {
        ...mapActions(['fetchSkills'])
    },
    computed: {
        ...mapGetters(['skills'])
    },
    created() {
        this.fetchSkills()
    },
    components: {
        skillsList: require('./skillsList')
    }
}
</script>
<style src="styles/about.scss" lang="scss" scoped>

</style>
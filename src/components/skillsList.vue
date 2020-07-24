<template lang="pug">
     div
        .title {{skillType}}
         table.table
            skill-item(
                v-for="skill in skills"
                :key="skill.id"
                :skill="skill"
                v-if="chechSkillType(skillType) === skill.type"
            )
            .addButton
                button(
                    type="button"
                    @click="addSkill"
                ) Добавить новый
                input(type="text" v-model="newSkill")
                input(type="number" v-model="newPercent")
            br
            hr
            br
</template>
<script>
import { mapMutations } from "vuex";
export default {
    props: {
        skillType: String,
        skills: Array
    },
    data(){
        return {
            newSkill: '',
            newPercent: 0,
        }
    },
    methods: {
        ...mapMutations(['addNewSkill']),
        addSkill() {
            this.addNewSkill({
                id: Math.round(Math.random() * 1000),
                name: this.newSkill,
                percent: this.newPercent,
                type: this.chechSkillType(this.skillType)
            })
            this.newSkill = ''
        }, 
        chechSkillType(skillType){
            switch (skillType){
                case 'frontend':
                    return 1;
                case 'workflow':
                    return 2;
                case 'backend':
                    return 3;
            }
        }
    },
    components: {
        skillItem: require('./skillsItem'),
    }
}
</script>
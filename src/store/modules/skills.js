const skills = {
    state: {
        data: []
    },
    getters: {
        skills(state){
            return state.data;
        }
    },
    mutations: {
        addNewSkill(state, skill){
            state.data.push(skill);
        }
    },
    actions: {
        fetchSkills({ state }){
            return fetch("/src/data.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            state.data = data;
        });
        }
    }
};

export default skills;
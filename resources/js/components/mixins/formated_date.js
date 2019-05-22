/**
 * Mixins are a way to make reuable functionalities for Vue components.
 * Once imported in the component these functions can be used in the component
 * **/


export const formated_date = {
    data(){
        return {
            today: new Date(),
        }
    },

    computed: {
        formated_date(){
            return this.today.toISOString().slice(0, 10)
        }
    }
};

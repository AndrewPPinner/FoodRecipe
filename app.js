const app = Vue.createApp({
    data() {
        return {
            img: null,
            instructions: null,
            title: null,
            source: null,
            show: null

        }
    },
    methods: {
        randomRecipes() {
            axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=799d622dd61b464ba425097c8c0d5023")
            .then(response => (console.log(response), this.img = response.data.recipes[0].image, this.instructions = response.data.recipes[0].instructions, this.title = response.data.recipes[0].title, this.source = response.data.recipes[0].spoonacularSourceUrl, this.show = true))
            .catch(e => (console.log(e)))
        },
        randomVeg() {
            axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=799d622dd61b464ba425097c8c0d5023&tags=vegetarian")
            .then(vResponse => (console.log(vResponse), this.img = vResponse.data.recipes[0].image, this.instructions = vResponse.data.recipes[0].instructions, this.title = vResponse.data.recipes[0].title, this.source = vResponse.data.recipes[0].spoonacularSourceUrl, this.show = true))
            .catch(vE => (console.log(vE)))
        }
    }
})

app.mount('#app')
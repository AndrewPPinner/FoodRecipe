const app = Vue.createApp({
    data() {
        return {
            img: null,
            title: null,
            source: null,
            show: null,
            mealType: null,
            img2: null,
            instructionsArray2: [{}],
            title2: null,
            source2: null,
            show2: null,
            img3: null,
            instructionsArray3: [{}],
            title3: null,
            source3: null,
            show3: null,
            instructionsArray: [{}]
        }
    },
    methods: {
        randomRecipes() {
            axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=799d622dd61b464ba425097c8c0d5023")
            .then(response => (console.log(response.data.recipes[0].analyzedInstructions[0].steps), this.instructionsArray = response.data.recipes[0].analyzedInstructions[0].steps, this.img = response.data.recipes[0].image, this.instructions = response.data.recipes[0].instructions, this.title = response.data.recipes[0].title, this.source = response.data.recipes[0].spoonacularSourceUrl, this.show = true))
            .catch(e => (console.log(e)))
        },
        randomVeg() {
            axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=799d622dd61b464ba425097c8c0d5023&tags=vegetarian")
            .then(vResponse => (console.log(vResponse), this.img2 = vResponse.data.recipes[0].image, this.instructionsArray2 = vResponse.data.recipes[0].analyzedInstructions[0].steps, this.title2 = vResponse.data.recipes[0].title, this.source2 = vResponse.data.recipes[0].spoonacularSourceUrl, this.show2 = true))
            .catch(vE => (console.log(vE)))
        },
        randomMeal(mealType) {
            axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=799d622dd61b464ba425097c8c0d5023&tags=" + mealType)
            .then(response => (console.log(response), this.img3 = response.data.recipes[0].image, this.instructionsArray3 = response.data.recipes[0].analyzedInstructions[0].steps, this.title3 = response.data.recipes[0].title, this.source3 = response.data.recipes[0].spoonacularSourceUrl, this.show3 = true))
            .catch(e => (console.log(e)))
        }
    }
})

app.mount('#app')
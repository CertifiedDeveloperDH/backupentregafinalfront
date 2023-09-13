import axios from 'axios'
function reducer(state, action){
    switch (action.type){
        case 'fetchApi':
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //console.log(response.data)
                state = response.data
            })
            return state
        case 'changeTheme':
            if (state === "light"){
                state = "dark"
            } else if (state === "dark"){
                state = "light"
            }
            return state
        case 'addFav':
            let destacado = {}
            let arrayDestacados = []
            axios.get(`https://jsonplaceholder.typicode.com/users/${state}`)
            .then(response => {
                console.log(response.data)
                destacado = response.data
            })
            if (!localStorage.getItem("destacados")){
                arrayDestacados.push(destacado)
                localStorage.setItem("destacados", JSON.stringify(arrayDestacados))
            } else{
                arrayDestacados = JSON.parse(localStorage.getItem("destacados"))
                arrayDestacados.push(destacado)
                localStorage.setItem("destacados", JSON.stringify(arrayDestacados))
            }
            return state
        default:
            return state
    }
}
export default reducer;
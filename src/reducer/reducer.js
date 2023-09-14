import axios from 'axios'
function reducer(state, action){
    switch (action.type){
        case 'fetchApi':
            return {
        ...state,
        data: action.payload,
        loading: false,
      };
            /*let respuesta = []
            let datos = axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //console.log(response.data)
                return response.data
            })
            let pasarDatos = async () => {
                    let respuestaDatos = await datos
                    //console.log(respuestaDatos)
                    return datos
                    //respuesta = respuestaDatos
            }
            console.log(pasarDatos())
            //console.log(respuesta)
            //console.log(datos)
            return state*/
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
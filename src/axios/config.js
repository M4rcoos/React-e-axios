import axios from 'axios'

const blogFetch =axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    Headers:{
        "content-Type": "aplication/json",
    }
})

export default blogFetch;
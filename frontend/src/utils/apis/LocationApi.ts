import axios from "axios"

const getAllLocations = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/locations`).then((res) => {
        return res.data.map((loc:any) => { return { ...loc, name: `${loc?.city}, ${ loc?.state }, ${ loc?.country }` } })
    })
}

export default {
    getAllLocations
}
const BASE_API = 'https://morning-hollows-96494.herokuapp.com/'

export default new class Api {
    // async getHotels() {
    //     const query = await fetch(`${BASE_API}api/hotels`)
    //     const { data } = await query.json()
    //     return data
    // }
    async getSuggestion(id) {
        const query = await fetch(`${BASE_API}api/hotels`)
        const { data } = await query.json()
        return data
    }
    async getHotelList() {
        const query = await await fetch(`${BASE_API}api/hotels`)
        const { data } = await query.json()
        return data.hotels
    }
}

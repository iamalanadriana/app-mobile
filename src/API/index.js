const BASE_API = 'https://morning-hollows-96494.herokuapp.com';
const ROUTE = '/api/hotels';

export default new class Api {
  async getHotels() {
    const url = `${BASE_API}${ROUTE}`;
    const query = await fetch(url);
    const {data} = await query.json();
    return data;
  }
  async getHotelById(id) {
    const url = `${BASE_API}${ROUTE}/${id}`;
    const query = await fetch(url);
    const {data} = await query.json();
    return data;
  }
}();

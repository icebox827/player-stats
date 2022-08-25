import axios from 'axios';

const baseUrl = 'https://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=baseball&response_format=JSON';

const Api = async (state) => {
  const response = await axios.get(baseUrl);
  state(response.data.body.players);
};

export default Api;

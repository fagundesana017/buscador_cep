import axios from "axios";

const api = axios.create({
baseURL: "https://viacep.com.br/ws/"
});
//exportar o arquivo
export default api;
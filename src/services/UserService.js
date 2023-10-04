import axios from './costomize-axios';

const fetchAllUser=(page)=>{
    return axios.get(`/api/users?page= ${page}`);
}



export { fetchAllUser}
import axios from 'axios';

const url = 'https://fin-dashboard-react.herokuapp.com/data'

export const fetchPosts = () => axios.get(url);
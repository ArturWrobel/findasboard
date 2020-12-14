import axios from 'axios';

const url = 'https://fin-dashboard-react.herokuapp.com/data'

//export const fetchPosts = () => axios.get(url);

export const fetchPosts = () => { axios.get('https://fin-dashboard-react.herokuapp.com/data')
            .then(res => {
                const persons = res.data;
                const dane = persons[0].data
                const daty = persons[0].dates
                const title1 = persons[0].title
                const z = 'Działa???'
                console.log('...........Axios...............')
                console.log(persons)
                console.log(dane)
                console.log(daty)
                console.log(title1)
                console.log('...........Axios...............')
            return z

            })
            
        }
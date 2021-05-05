//import request from '@/request';
import http from '@/http';

export default {
    getTaxes() {        
        return http.get('taxes')
            .then( response => {
                return [response.data, null];
            })
            .catch(function (error) {                        
                return [null, error.response];                
            })
    },
    postNewsLetter (data) {
        return http.post('active/subscribe', data)
            .then( response => {
                return response.data
            })
    },
    postContact (data) {
        return http.post('active/contact', data)
        .then ( response => {
            return response.data
        })
    },
    getCountry () {
        return http.post('active/ip2location/get_country')
        .then ( response => {
            return response.data
        })
    },
    getPremiumFreeEpisode() {
        return http.post('active/home/premium_free_episode')
            .then(response => {
                return response.data
            })
    },    
    async getUser() {
        try {
            const response = await axios.get('/user?ID=12345');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }    
}
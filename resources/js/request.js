//import axios from 'axios';
import http from '@/http';

export default {
    get(url) {
        return http.get(url)
            .then( response => {
                return [response.data, null];
            })
            .catch(function (error) {                        
                return [null, error.response];                
            })
    },
    post (url, data) {
        return http.post(url, data)
            .then( response => {
                return response.data
            })
    },
    put (url,data) {
        return http.put(url, data)
        .then ( response => {
            return response.data
        })
    },
    delete (url) {
        return http.delete(url)
            .then ( response => {
                return response.data
            })
    }
}
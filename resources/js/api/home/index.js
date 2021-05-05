import axios from 'axios'

export default {
    postBannerClick (data) {
        return axios.post('active/banner_clicks',data)
        .then( response => {
             return response.data
        })
    },
    postNewsLetter (data) {
        return axios.post('active/subscribe', data)
        .then( response => {
            return response.data
        })
    },
    postContact (data) {
        return axios.post('active/contact', data)
        .then ( response => {
            return response.data
        })
    },
    getCountry () {
        return axios.post('active/ip2location/get_country')
        .then ( response => {
            return response.data
        })
    },
    getPremiumFreeEpisode() {
        return axios.post('active/home/premium_free_episode')
            .then(response => {
                return response.data
            })
    },
}
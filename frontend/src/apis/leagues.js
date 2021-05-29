import axios from 'axios';
class League {
    getList = () => {
        return axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/leagues/list`, {})
            .then(response => {
                return response.data;
            }).catch(error => {
                return error;
            })
    }

    getMatches = (id) => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/leagues/matches`, {
            params: {
                id: id
            }
        })
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    getMatch = (id) => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/leagues/match`, {
            params: {
                id: id
            }
        })
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    createBet = (id, description, amount, wallet_address) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/leagues/bet`, {
            id: id,
            description: description,
            amount: amount,
            wallet_address: wallet_address
        }, {})
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    placeBet = (id, amount, wallet_address) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/leagues/place_bet`, {
            id: id,
            amount: amount,
            wallet_address: wallet_address
        }, {})
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    getBetList = (id) => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/leagues/bet/list`, {
            params: {
                id: id
            }
        })
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    
}
export default new League();
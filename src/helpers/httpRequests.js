import axios from 'axios';

class httpRequest {

    getAllAlbums() {
        return axios.get('https://jsonplaceholder.typicode.com/albums');
    }
}

export default new httpRequest();
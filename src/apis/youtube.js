import axios from 'axios';

const KEY = 'AIzaSyCmpVieOdJKcz_70Na4U0C6FNteT5oy-tQ';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
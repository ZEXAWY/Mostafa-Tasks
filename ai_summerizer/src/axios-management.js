import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://ai-summarizer-b2b63-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default instance;

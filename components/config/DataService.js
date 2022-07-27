import axios from 'axios'

let API_ENDPOINT = process.env.baseUrl;
export default axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Content-type": "application/json",
        // 'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE",
        
      
    }
  });

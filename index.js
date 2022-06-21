import axios from 'axios';

let result = axios.post('http://localhost/portofolio/api/login?email=super.admin@porto.id&password=password')
    .then (function (response) {
        console.log(response.data);
        }
    )
    .catch(function (error) {
        console.log(error);
    }
);
console.log(result);
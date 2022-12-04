import axios from "axios";

export default async function getCategories() {
   var config = {
      method: 'get',
      url: 'category',
      headers: {
         'Authorization': localStorage.getItem('token'),
      }
   };

   let res = axios(config)
      .then(function (response) {
         return response.data;
      })
      .catch(function (error) {
         return error;
      });

   return res;
}
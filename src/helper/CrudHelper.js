import axios from "axios";

export default async function index() {

   var config = {
      method: 'get',
      url: 'movies',
      headers: {
         'Authorization': localStorage.getItem('token'),
      }
   };

   let res = axios(config)
      .then(function (response) {
         // console.log(response.data);
         return response.data;
      })
      .catch(function (error) {
         return error;
      });

   return res;
}

export async function create(body) { }
export async function update(body) { }

export async function destory(body) {
   var data = new FormData();
   data.append('_method', 'delete');
      console.log(body);
   var config = {
      method: 'post',
      url: 'movies/' + body,
      headers: {
         'Authorization': localStorage.getItem('token'),
      },
      data: data
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
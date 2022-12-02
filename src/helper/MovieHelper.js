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
         return response.data;
      })
      .catch(function (error) {
         return error;
      });
   
   return res;
}

export async function create(body) { }

export async function update(body, id) {
   var data = new FormData();
   let file = document.querySelector("input[type=file]");
   data.append("image", file.files[0]);
   data.append('name', body.name);
   data.append('description', body.description);
   data.append('category_id', body.category_id);
   data.append('_method', 'put');
   
   var config = {
      method: 'post',
      url: 'movies/' + id,
      headers: {
         'Authorization': localStorage.getItem('token'),
      },
      data: data
   };

   let res = axios(config)
      .then(function (response) {
         console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
         console.log(error);
      });
   
   return res;
}

export async function destory(body) {
   var data = new FormData();
   data.append('_method', 'delete');
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
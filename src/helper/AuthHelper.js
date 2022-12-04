import axios from "axios";
export default async function register(body) {
   
   var data = new FormData();
   data.append('name', body.name);
   data.append('email', body.email);
   data.append('password', body.password);
   
   var config = {
      method: 'post',
      url: 'register',
      headers: {
         'Content-Type': 'multipart/form-data'
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
export async function login(body) {
   
   var data = new FormData();
   data.append('email', body.email);
   data.append('password', body.password);
   
   var config = {
      method: 'post',
      url: 'login',
      headers: {
         'Content-Type': 'multipart/form-data'
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
import axios from "axios";

export async function getMovies() {

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

export async function createMovie(body) {
   const data = new FormData();
   let file = document.querySelector("input[type=file]").files[0];
   data.append("image", file);
   data.append('title', body.title);
   data.append('description', body.description);
   data.append('category_id', body.category_id);
   data.append('rate', Math.floor(Math.random() * 10));

   var config = {
      method: 'post',
      url: 'movies',
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

export async function updateMovie(body, id) {
   var data = new FormData();
   let file = document.querySelector("input[type=file]").files[0];
   if (file) {
      data.append("image", file);
   }
   data.append('title', body.title);
   data.append('description', body.description);
   data.append('category_id', body.category_id);
   data.append('_method', 'put');
   data.append('rate', Math.floor(Math.random() * 10));

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
         return response.data;
      })
      .catch(function (error) {
            return error.response.data.message;
      });

   return res;
}

export async function deleteMovie(id) {
   var data = new FormData();
   data.append('_method', 'delete');
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
         return response.data;
      })
      .catch(function (error) {
         return error;
      });

   return res;
}
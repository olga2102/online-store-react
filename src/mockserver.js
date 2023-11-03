import { createServer } from "miragejs";
import { Response } from 'miragejs';

const products = [...new Array(100)].map((item, index) => {
  const id = index + 1;
  return {
    id, title: 'Product ' + id, price: 1000, description: 'Product description ' + id, left: 10
  }
});

const token = 'knj34nhu923n4j1sia1jnd2j34n1j23k423';
const code = '123456';

createServer({
  routes() {
    this.timing = 1000;
    this.namespace = '/api';

    this.post('/auth', (schema, request) => {
      const { nickname, password } = JSON.parse(request.requestBody);
      if (nickname === 'admin' && password === 'qwerty12345') {
        return {
          message: 'Successful authorization',
          token: token
        }
      }
      return new Response(403, {}, { message: 'Incorrect login or password'});
    });

    this.post('/registration', (schema, request) => {
      const { nickname, password } = JSON.parse(request.requestBody);

      if (nickname.length) {
        return new Response(404, {}, { message: 'The nickname field cannot be empty' });
      }

      if (nickname.length < 5) {
        return new Response(404, {}, { message: 'The nickname field cannot be less than 5 characters' });
      }

      if (password.length) {
        return new Response(404, {}, { message: 'The password field cannot be empty' });
      }

      if (password.length < 5) {
        return new Response(404, {}, { message: 'The password field cannot be less than 5 characters' });
      }

      return {
        message: 'Successful registration account',
      }
    });

    this.post('/registration/confirm/:number', (schema, request) => {
      const numberCode = request.params.number;
      if (!numberCode) {
        return new Response(404, {}, { message: 'The code cannot be empty' });

      }
      if (numberCode !== code) {
        return new Response(403, {}, { message: 'Incorrect code' });
      }
      return {
        message: 'Successful confirmation account and authorization',
        token: token
      }
    });

    this.get('/catalog', (schema, request) => {
      const authorizationToken = request.requestHeaders.Authorization;
      const { offset, count } = request.queryParams;

      if (authorizationToken !== token) {
        return new Response(403, {}, { message: 'Access not allowed.' });
      }

      const returnedProducts = products.filter((item, index) => {
        if (offset && count) {
          return !(index < Number(offset) || index >= Number(offset) + Number(count));
        }
        if (offset) {
          return !(index < Number(offset));
        }
        if (count) {
          return (index < Number(count));
        }
        return true;
      })

      return {
        total: Number(products.length),
        offset: Number(offset) || 0,
        count: Number(returnedProducts.length),
        products: returnedProducts,
      }
    });

    this.get('/catalog/:id', (schema, request) => {
      const authorizationToken = request.requestHeaders.Authorization;
      const id = request.params.id;

      if (authorizationToken !== token) {
        return new Response(403, {}, { message: 'Access not allowed.' });
      }

      if (!id) return new Response(404, {}, {
        message: 'The request is missing id'
      })

      const indexProduct = products.findIndex((item) => item.id === Number(id));

      if (indexProduct < 0) return new Response(404, {}, {
        message: 'Item not found'
      })

      return products[indexProduct];
    });
  }
});


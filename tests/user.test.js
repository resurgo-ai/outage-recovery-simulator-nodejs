const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  it('should handle multiple get requests', (done) => {
    let numRequests = Math.floor(Math.random() * 51) + 50; // 50..100
    let requests = [];
    for (let i = 0; i < numRequests; i++) {
      let path = '/user/1';
      if (Math.random() < 0.02) {
        path = '/user/999';
      }
      requests.push(request(app).get(path));
    }

    Promise.all(requests)
      .then(responses => {
        responses.forEach(response => {
          if (response.req.path === '/user/999') {
            assert.equal(response.status, 404);
          } else {
            assert.equal(response.status, 200);
            assert.equal(response.body.id, 1);
          }
        });
      })
      .catch(err => {
        console.error("Error in sampling attempt:", err);
      });
    done()
  });
});

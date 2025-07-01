import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('should return Hello Jenkins!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Jenkins!');
  });
});

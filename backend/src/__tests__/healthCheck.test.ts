import request from 'supertest';
import app from '../app';

describe('Health Check', () => {
  it('should return status ok', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});

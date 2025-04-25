import request from 'supertest';
import app from '../app';

describe('Auth Middleware', () => {
  it('should reject requests without an Authorization header', async () => {
    const response = await request(app).get('/api/user/profile');
    expect(response.status).toBe(401);
    expect(response.body.message).toMatch(/authorization/i);
  });
});

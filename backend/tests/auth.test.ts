import request from 'supertest';
import app from '../src/index';

describe('Auth API', () => {
  it('should register a user (mock)', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@preptalk.com', password: 'password123', displayName: 'Test User' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('uid');
    expect(res.body).toHaveProperty('email', 'test@preptalk.com');
  });

  it('should login a user (mock)', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@preptalk.com', password: 'password123' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should handle login failure (mock)', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@preptalk.com', password: 'wrongpass' });
    expect(res.status).toBe(401);
  });

  it('should return mock Google login', async () => {
    const res = await request(app)
      .post('/api/auth/google')
      .send({ token: 'mock-google-token' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('uid');
  });

  it('should return forgot-password mock', async () => {
    const res = await request(app)
      .post('/api/auth/forgot-password')
      .send({ email: 'test@preptalk.com' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});

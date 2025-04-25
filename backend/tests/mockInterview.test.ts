import request from 'supertest';
import app from '../src/index';

describe('Mock Interview API', () => {
  it('should get mock interview session', async () => {
    const res = await request(app).get('/api/mock-interview');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('sessionId');
    expect(res.body).toHaveProperty('questions');
  });

  // Streaming endpoint is best tested in integration/e2e or with a custom client
});

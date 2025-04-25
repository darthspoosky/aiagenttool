import request from 'supertest';
import app from '../src/index';

describe('User Profile API', () => {
  it('should get mock user profile', async () => {
    const res = await request(app).get('/api/user/profile');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('uid');
    expect(res.body).toHaveProperty('email');
  });

  it('should update mock user profile', async () => {
    const res = await request(app)
      .put('/api/user/profile')
      .send({ displayName: 'New Name', photoURL: 'https://i.pravatar.cc/150?img=9' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('displayName', 'New Name');
    expect(res.body).toHaveProperty('photoURL', 'https://i.pravatar.cc/150?img=9');
  });
});

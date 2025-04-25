import http from 'http';

describe('Mock Interview Streaming API', () => {
  it('should stream mock interview questions via SSE', (done) => {
    const req = http.request({
      hostname: 'localhost',
      port: 4000,
      path: '/api/mock-interview/stream',
      method: 'GET',
      headers: { Accept: 'text/event-stream' }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk.toString();
      });
      res.on('end', () => {
        expect(data).toMatch(/event: question/);
        expect(data).toMatch(/event: end/);
        done();
      });
    });
    req.end();
  });
});

/**
 * Entry point for PrepTalk Backend
 *
 * Initializes Express server and mounts feature routes.
 *
 * @module index
 */
import app from './app';

const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`PrepTalk Backend listening on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import dashboardRoutes from './routes/dashboard';
import studyPlanRoutes from './routes/studyPlan';
import practiceHubRoutes from './routes/practiceHub';
import analyticsRoutes from './routes/analytics';
import mockInterviewRoutes from './routes/mockInterview';
import achievementsRoutes from './routes/achievements';
import supportRoutes from './routes/support';
import searchRoutes from './routes/search';

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Health check endpoint
 * @route GET /
 * @returns {Object} status and message
 */
app.get('/', (_req: express.Request, res: express.Response) => res.json({ status: 'ok', message: 'PrepTalk Backend running' }));

// Mount feature routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/study-plan', studyPlanRoutes);
app.use('/api/practice-hub', practiceHubRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/mock-interview', mockInterviewRoutes);
app.use('/api/achievements', achievementsRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/search', searchRoutes);

/**
 * Global error handler
 * @param err - Error object
 * @param _req - Express request
 * @param res - Express response
 * @param _next - Express next function
 */
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error', error: err?.message });
});

export default app;

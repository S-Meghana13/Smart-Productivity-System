import Task from '../models/Task.js';

export const getProductivityInsights = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });

    let totalTime = 0;
    let categoryMap = {};
    let dailyTrend = {};

    tasks.forEach(task => {
      task.timeLogs.forEach(log => {
        totalTime += log.minutes;

        const date = new Date(log.date).toLocaleDateString();
        dailyTrend[date] = (dailyTrend[date] || 0) + log.minutes;

        if (task.category) {
          categoryMap[task.category] = (categoryMap[task.category] || 0) + log.minutes;
        }
      });
    });

    const mostProductiveDay = Object.entries(dailyTrend).sort((a, b) => b[1] - a[1])[0] || ["N/A", 0];
    const topCategory = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0] || ["Uncategorized", 0];

    const insights = {
      totalTime,
      mostProductiveDay,
      topCategory,
      advice: [
        totalTime > 300 ? "Great job staying consistent!" : "Try to increase focused work time.",
        topCategory ? `You’re focusing more on "${topCategory[0]}" — keep it up!` : "Consider categorizing your tasks.",
      ]
    };

    res.json(insights);
  } catch (error) {
    console.error("Insight Error", error);
    res.status(500).json({ message: "Failed to generate insights" });
  }
};

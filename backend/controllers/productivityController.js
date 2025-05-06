// controllers/productivityController.js
/*import Productivity from '../models/Productivity.js';
export const createProductivity = async (req, res) => {
  const { userId, productivityScore, activityDetails } = req.body;
  const newProductivity = new Productivity({
    userId,
    productivityScore,
    lastActivity: new Date(),
    activityDetails,
    trends: ['Increase']
  });
  try {
    await newProductivity.save();
    res.status(201).json({ message: 'Productivity data saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving productivity data' });
  }
};

export const getProductivity = async (req, res) => {
  const { userId } = req.params;
  try {
    const productivityData = await Productivity.find({ userId }).sort({ lastActivity: -1 }).limit(1);
    res.status(200).json(productivityData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching productivity data' });
  }
};
*/



import Productivity from '../models/Productivity.js';
import User from '../models/User.js'; // If you have user names

export const createProductivity = async (req, res) => {
  const { userId, productivityScore, activityDetails } = req.body;

  const newProductivity = new Productivity({
    userId,
    productivityScore,
    lastActivity: new Date(),
    activityDetails,
    trends: ['Increase'],
  });

  try {
    await newProductivity.save();
    res.status(201).json({ message: 'Productivity data saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving productivity data' });
  }
};

export const getProductivity = async (req, res) => {
  const { userId } = req.params;

  try {
    const productivityData = await Productivity.find({ userId }).sort({ lastActivity: -1 }).limit(1);
    res.status(200).json(productivityData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching productivity data' });
  }
};

// ✅ Admin View

export const getAllProductivityForAdmin = async (req, res) => {
    try {
      const allProductivity = await Productivity.find().populate('userId', 'name email');
      const formatted = allProductivity.map(item => ({
        userName: item.userId?.name || "Unknown",
        productivityScore: item.productivityScore,
        lastLogin: item.lastActivity,
        tasksCompleted: item.activityDetails?.length || 0,
        timeSpent: item.activityDetails?.reduce((sum, activity) => sum + (activity.duration || 0), 0) || 0
      }));
      res.status(200).json(formatted);
    } catch (err) {
      console.error("Error getting productivity data:", err);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

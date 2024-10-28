// const Notification = require('../models/Notification');

// const cleanOldNotifications = async () => {
//   const oldDate = new Date(Date.now() -  3 * 60 * 1000);
//   await Notification.deleteMany({ createdAt: { $lt: oldDate } });
// };

// setInterval(cleanOldNotifications,  2* 60 * 1000); // Run 2min delay

const Notification = require('../models/Notification');

const cleanOldNotifications = async () => {

  await Notification.deleteMany({
    $expr: { $eq: [{ $size: "$seenBy" }, "$totalRecipients"] }
   
  });
};

//  every 2 minutes e run korbe
setInterval(cleanOldNotifications, 2 * 60 * 1000);

export { bookingList } from "./booking";
export { coachList } from "./coach";
export { courseList } from "./course";
export {
  userList,
  getUserById,
  getUserByPhone,
  getUsersByMembershipLevel,
} from "./user";
export {
  orderList,
  getOrderById,
  getOrdersByUserId,
  getOrdersByStatus,
  getOrdersByType,
} from "./order";
export {
  dailyCourseList,
  getDailyCourseById,
  getDailyCoursesByDate,
  getDailyCoursesByCoach,
  getDailyCoursesByStatus,
  isUserBooked,
  getUserBookedCourses,
} from "./daily-course";

// 辅助函数
export const getCoachById = (id) => {
  return coachList.find((coach) => coach.id === id);
};

export const getCourseById = (id) => {
  return courseList.find((course) => course.id === id);
};

export const getBookingsByCoachId = (coachId) => {
  return bookingList.filter((booking) => booking.coachId === coachId);
};

export { mockApi } from './api'

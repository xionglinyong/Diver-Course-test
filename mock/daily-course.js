export const dailyCourseList = [
  {
    id: "DC20240320001",
    courseId: 1,
    courseName: "基础健身课程",
    date: "2024-03-20",
    startTime: "10:00",
    endTime: "11:00",
    duration: 60,
    maxParticipants: 10,
    currentParticipants: 3,
    status: 1, // available: 可预约, full: 已满, cancelled: 已取消
    price: 299.0,
    location: "A区健身房",
    coach: {
      id: 1,
      name: "张教练",
      avatar: "/static/images/coach1.jpg",
      rating: 4.8,
    },
    labels: ["新手友好", "专业指导", "小班制"],
    participants: [
      {
        userId: 1,
        userName: "张小明",
        avatar: "/static/avatars/user1.png",
        bookingTime: 1710806400000, // 2024-03-19
      },
      {
        userId: 4,
        userName: "陈静",
        avatar: "/static/avatars/user4.png",
        bookingTime: 1710810000000,
      },
      {
        userId: 6,
        userName: "周婷",
        avatar: "/static/avatars/user6.png",
        bookingTime: 1710813600000,
      },
    ],
    description: "适合初学者的基础训练课程，强调正确的动作要领",
  },
  {
    id: "DC20240320002",
    courseId: 2,
    courseName: "高级塑形课程",
    date: "2024-03-20",
    startTime: "14:00",
    endTime: "15:30",
    duration: 90,
    maxParticipants: 8,
    currentParticipants: 8,
    status: 2,
    price: 199.0,
    location: "B区健身房",
    coach: {
      id: 2,
      name: "李教练",
      avatar: "/static/images/coach2.jpg",
      rating: 4.9,
    },
    labels: ["进阶课程", "塑形", "高强度"],
    participants: [
      {
        userId: 2,
        userName: "李小红",
        avatar: "/static/avatars/user2.png",
        bookingTime: 1710748800000,
      },
      {
        userId: 3,
        userName: "王健",
        avatar: "/static/avatars/user3.png",
        bookingTime: 1710752400000,
      },
      // ... 其他6个参与者
    ],
    description: "针对进阶学员的专业塑形课程，强调肌肉线条的雕刻",
  },
  {
    id: "DC20240320003",
    courseId: 3,
    courseName: "瑜伽冥想课",
    date: "2024-03-20",
    startTime: "16:00",
    endTime: "17:00",
    duration: 60,
    maxParticipants: 12,
    currentParticipants: 5,
    status: 1,
    price: 159.0,
    location: "瑜伽室",
    coach: {
      id: 2,
      name: "李教练",
      avatar: "/static/images/coach2.jpg",
      rating: 4.9,
    },
    labels: ["放松", "冥想", "柔韧性"],
    participants: [
      {
        userId: 8,
        userName: "孙美",
        avatar: "/static/avatars/user8.png",
        bookingTime: 1710835200000,
      },
      // ... 其他4个参与者
    ],
    description: "结合瑜伽体式与冥想练习，帮助身心放松",
  },
];

// 辅助函数
export const getDailyCourseById = (id) => {
  return dailyCourseList.find((course) => course.id === id);
};

export const getDailyCoursesByDate = (date) => {
  return dailyCourseList.filter((course) => course.date === date);
};

export const getDailyCoursesByCoach = (coachId) => {
  return dailyCourseList.filter((course) => course.coach.id === coachId);
};

export const getDailyCoursesByStatus = (status) => {
  return dailyCourseList.filter((course) => course.status === status);
};

// 检查用户是否已预约某课程
export const isUserBooked = (courseId, userId) => {
  const course = getDailyCourseById(courseId);
  return course?.participants.some((p) => p.userId === userId) || false;
};

// 获取用户已预约的课程
export const getUserBookedCourses = (userId) => {
  return dailyCourseList.filter((course) =>
    course.participants.some((p) => p.userId === userId)
  );
};

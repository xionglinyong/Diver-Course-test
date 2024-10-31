export const orderList = [
  {
    id: "ORD20240301001",
    userId: 1,
    type: "course",
    status: "completed",
    createTime: 1709251200000,
    payTime: 1709251260000,
    price: 299.0,
    details: {
      courseId: 1,
      courseName: "基础健身课程",
      coachId: 1,
      coachName: "张教练",
      count: 10,
      unitPrice: 29.9,
      validityPeriod: "2024-03-01 至 2024-06-01",
    },
  },
  {
    id: "ORD20240305002",
    userId: 1,
    type: "product",
    status: "completed",
    createTime: 1709596800000,
    payTime: 1709596860000,
    price: 199.0,
    details: {
      productId: 1,
      productName: "瑜伽垫",
      specifications: "183cm*61cm*6mm",
      color: "蓝色",
      count: 1,
      unitPrice: 199.0,
    },
  },
  {
    id: "ORD20240310003",
    userId: 2,
    type: "course",
    status: "completed",
    createTime: 1710028800000,
    payTime: 1710028860000,
    price: 999.0,
    details: {
      courseId: 2,
      courseName: "高级塑形课程",
      coachId: 2,
      coachName: "李教练",
      count: 20,
      unitPrice: 49.95,
      validityPeriod: "2024-03-10 至 2024-09-10",
    },
  },
  {
    id: "ORD20240312004",
    userId: 3,
    type: "product",
    status: "paid",
    createTime: 1710201600000,
    payTime: 1710201660000,
    price: 2999.0,
    details: {
      productId: 2,
      productName: "智能手环",
      specifications: "黑色标准版",
      count: 1,
      unitPrice: 2999.0,
    },
  },
  {
    id: "ORD20240315005",
    userId: 4,
    type: "course",
    status: "pending",
    createTime: 1710460800000,
    price: 599.0,
    details: {
      courseId: 1,
      courseName: "基础健身课程",
      coachId: 1,
      coachName: "张教练",
      count: 5,
      unitPrice: 119.8,
      validityPeriod: "2024-03-15 至 2024-05-15",
    },
  },
  {
    id: "ORD20240316006",
    userId: 5,
    type: "product",
    status: "cancelled",
    createTime: 1710547200000,
    price: 299.0,
    details: {
      productId: 3,
      productName: "蛋白粉",
      specifications: "1000g",
      count: 2,
      unitPrice: 149.5,
    },
  },
  {
    id: "ORD20240318007",
    userId: 6,
    type: "course",
    status: "completed",
    createTime: 1710720000000,
    payTime: 1710720060000,
    price: 399.0,
    details: {
      courseId: 2,
      courseName: "高级塑形课程",
      coachId: 2,
      coachName: "李教练",
      count: 3,
      unitPrice: 133.0,
      validityPeriod: "2024-03-18 至 2024-04-18",
    },
  },
  {
    id: "ORD20240319008",
    userId: 7,
    type: "product",
    status: "completed",
    createTime: 1710806400000,
    payTime: 1710806460000,
    price: 159.0,
    details: {
      productId: 4,
      productName: "运动水壶",
      specifications: "600ml",
      color: "黑色",
      count: 1,
      unitPrice: 159.0,
    },
  },
  {
    id: "ORD20240320009",
    userId: 8,
    type: "course",
    status: "paid",
    createTime: 1710892800000,
    payTime: 1710892860000,
    price: 1299.0,
    details: {
      courseId: 1,
      courseName: "基础健身课程",
      coachId: 1,
      coachName: "张教练",
      count: 30,
      unitPrice: 43.3,
      validityPeriod: "2024-03-20 至 2024-09-20",
    },
  },
  {
    id: "ORD20240320010",
    userId: 9,
    type: "product",
    status: "pending",
    createTime: 1710892800000,
    price: 499.0,
    details: {
      productId: 5,
      productName: "哑铃套装",
      specifications: "10kg*2",
      count: 1,
      unitPrice: 499.0,
    },
  },
];

// 辅助函数
export const getOrderById = (orderId) => {
  return orderList.find((order) => order.id === orderId);
};

export const getOrdersByUserId = (userId) => {
  return orderList.filter((order) => order.userId === userId);
};

export const getOrdersByStatus = (status) => {
  return orderList.filter((order) => order.status === status);
};

export const getOrdersByType = (type) => {
  return orderList.filter((order) => order.type === type);
};

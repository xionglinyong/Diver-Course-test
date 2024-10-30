export const STATUS = {
  All: 0,
  PendingPayment: 1,
  PendingShipment: 2,
  PendingReceipt: 3,
  Completed: 4,
};

export const TABS = [
  { label: "所有订单", status: STATUS.All },
  { label: "待付款", status: STATUS.PendingPayment },
  { label: "待发货", status: STATUS.PendingShipment },
  { label: "待收货", status: STATUS.PendingReceipt },
  { label: "已完成", status: STATUS.Completed },
];

export const mockOrders = [
  {
    id: 1,
    description: "跑步课程",
    status: STATUS.PendingPayment,
    purchaseTime: "2023-10-01 10:00",
    price: 199.99,
  },
  {
    id: 2,
    description: "游泳课程",
    status: STATUS.PendingShipment,
    purchaseTime: "2023-10-02 11:00",
    price: 249.99,
  },
  {
    id: 3,
    description: "自行车课程",
    status: STATUS.PendingReceipt,
    purchaseTime: "2023-10-03 12:00",
    price: 299.99,
  },
  {
    id: 4,
    description: "跳绳课程",
    status: STATUS.Completed,
    purchaseTime: "2023-10-04 13:00",
    price: 349.99,
  },
  {
    id: 5,
    description: "有氧操课程",
    status: STATUS.PendingPayment,
    purchaseTime: "2023-10-05 14:00",
    price: 399.99,
  },
  {
    id: 6,
    description: "哑铃训练课程",
    status: STATUS.PendingShipment,
    purchaseTime: "2023-10-06 15:00",
    price: 449.99,
  },
  {
    id: 7,
    description: "杠铃训练课程",
    status: STATUS.PendingReceipt,
    purchaseTime: "2023-10-07 16:00",
    price: 499.99,
  },
  {
    id: 8,
    description: "自重训练课程",
    status: STATUS.Completed,
    purchaseTime: "2023-10-08 17:00",
    price: 549.99,
  },
  {
    id: 9,
    description: "力量训练器械课程",
    status: STATUS.PendingPayment,
    purchaseTime: "2023-10-09 18:00",
    price: 599.99,
  },
  {
    id: 10,
    description: "瑜伽课程",
    status: STATUS.PendingShipment,
    purchaseTime: "2023-10-10 19:00",
    price: 649.99,
  },
  {
    id: 11,
    description: "普拉提课程",
    status: STATUS.PendingReceipt,
    purchaseTime: "2023-10-11 20:00",
    price: 699.99,
  },
  {
    id: 12,
    description: "拉伸课程",
    status: STATUS.Completed,
    purchaseTime: "2023-10-12 21:00",
    price: 749.99,
  },
  {
    id: 13,
    description: "平板支撑课程",
    status: STATUS.PendingPayment,
    purchaseTime: "2023-10-13 22:00",
    price: 799.99,
  },
  {
    id: 14,
    description: "仰卧起坐课程",
    status: STATUS.PendingShipment,
    purchaseTime: "2023-10-14 23:00",
    price: 849.99,
  },
  {
    id: 15,
    description: "俄罗斯转体课程",
    status: STATUS.PendingReceipt,
    purchaseTime: "2023-10-15 00:00",
    price: 899.99,
  },
  {
    id: 16,
    description: "侧桥课程",
    status: STATUS.Completed,
    purchaseTime: "2023-10-16 01:00",
    price: 949.99,
  },
  {
    id: 17,
    description: "蹲跳课程",
    status: STATUS.PendingPayment,
    purchaseTime: "2023-10-17 02:00",
    price: 999.99,
  },
  {
    id: 18,
    description: "高抬腿课程",
    status: STATUS.PendingShipment,
    purchaseTime: "2023-10-18 03:00",
    price: 1049.99,
  },
  {
    id: 19,
    description: "冲刺训练课程",
    status: STATUS.PendingReceipt,
    purchaseTime: "2023-10-19 04:00",
    price: 1099.99,
  },
  {
    id: 20,
    description: "波比跳课程",
    status: STATUS.Completed,
    purchaseTime: "2023-10-20 05:00",
    price: 1149.99,
  },
];

// 模拟获取订单列表的API
export const fetchOrders = () => {
  return Promise.resolve(mockOrders);
};

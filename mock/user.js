export const userList = [
  {
    id: 1,
    mid: "u5a6b7c8",
    uid: "user_001",
    phoneId: "13800138001",
    name: "张小明",
    avatar: "/static/avatars/user1.png",
    registrationTime: 1677648000000, // 2023-03-01
    gender: "male",
    age: 28,
    membershipLevel: "gold",
    lastLoginTime: 1710921600000, // 2024-03-20
    preferences: ["力量训练", "有氧运动"],
    bookingCount: 15
  },
  {
    id: 2,
    mid: "u7d8e9f0",
    uid: "user_002",
    phoneId: "13800138002",
    name: "李小红",
    avatar: "/static/avatars/user2.png",
    registrationTime: 1680326400000, // 2023-04-01
    gender: "female",
    age: 24,
    membershipLevel: "silver",
    lastLoginTime: 1710835200000, // 2024-03-19
    preferences: ["瑜伽", "普拉提"],
    bookingCount: 8
  },
  {
    id: 3,
    mid: "u1a2b3c4",
    uid: "user_003",
    phoneId: "13800138003",
    name: "王健",
    avatar: "/static/avatars/user3.png",
    registrationTime: 1682918400000, // 2023-05-01
    gender: "male",
    age: 32,
    membershipLevel: "platinum",
    lastLoginTime: 1710748800000, // 2024-03-18
    preferences: ["游泳", "拳击"],
    bookingCount: 25
  },
  {
    id: 4,
    mid: "u4d5e6f7",
    uid: "user_004",
    phoneId: "13800138004",
    name: "陈静",
    avatar: "/static/avatars/user4.png",
    registrationTime: 1685596800000, // 2023-06-01
    gender: "female",
    age: 27,
    membershipLevel: "gold",
    lastLoginTime: 1710662400000, // 2024-03-17
    preferences: ["舞蹈", "瑜伽"],
    bookingCount: 12
  },
  {
    id: 5,
    mid: "u8g9h0i1",
    uid: "user_005",
    phoneId: "13800138005",
    name: "刘强",
    avatar: "/static/avatars/user5.png",
    registrationTime: 1688188800000, // 2023-07-01
    gender: "male",
    age: 30,
    membershipLevel: "silver",
    lastLoginTime: 1710576000000, // 2024-03-16
    preferences: ["跑步", "力量训练"],
    bookingCount: 18
  },
  {
    id: 6,
    mid: "u2j3k4l5",
    uid: "user_006",
    phoneId: "13800138006",
    name: "周婷",
    avatar: "/static/avatars/user6.png",
    registrationTime: 1690867200000, // 2023-08-01
    gender: "female",
    age: 25,
    membershipLevel: "basic",
    lastLoginTime: 1710489600000, // 2024-03-15
    preferences: ["普拉提", "拉伸"],
    bookingCount: 6
  },
  {
    id: 7,
    mid: "u6m7n8o9",
    uid: "user_007",
    phoneId: "13800138007",
    name: "赵阳",
    avatar: "/static/avatars/user7.png",
    registrationTime: 1693545600000, // 2023-09-01
    gender: "male",
    age: 35,
    membershipLevel: "gold",
    lastLoginTime: 1710403200000, // 2024-03-14
    preferences: ["举重", "CrossFit"],
    bookingCount: 20
  },
  {
    id: 8,
    mid: "u0p1q2r3",
    uid: "user_008",
    phoneId: "13800138008",
    name: "孙美",
    avatar: "/static/avatars/user8.png",
    registrationTime: 1696224000000, // 2023-10-01
    gender: "female",
    age: 29,
    membershipLevel: "platinum",
    lastLoginTime: 1710316800000, // 2024-03-13
    preferences: ["瑜伽", "冥想"],
    bookingCount: 30
  },
  {
    id: 9,
    mid: "u4s5t6u7",
    uid: "user_009",
    phoneId: "13800138009",
    name: "吴峰",
    avatar: "/static/avatars/user9.png",
    registrationTime: 1698816000000, // 2023-11-01
    gender: "male",
    age: 31,
    membershipLevel: "silver",
    lastLoginTime: 1710230400000, // 2024-03-12
    preferences: ["篮球", "力量训练"],
    bookingCount: 10
  },
  {
    id: 10,
    mid: "u8v9w0x1",
    uid: "user_010",
    phoneId: "13800138010",
    name: "郑莉",
    avatar: "/static/avatars/user10.png",
    registrationTime: 1701494400000, // 2023-12-01
    gender: "female",
    age: 26,
    membershipLevel: "basic",
    lastLoginTime: 1710144000000, // 2024-03-11
    preferences: ["有氧操", "舞蹈"],
    bookingCount: 5
  }
]

// 辅助函数
export const getUserById = (id) => {
  return userList.find(user => user.id === id)
}

export const getUserByPhone = (phoneId) => {
  return userList.find(user => user.phoneId === phoneId)
}

export const getUsersByMembershipLevel = (level) => {
  return userList.filter(user => user.membershipLevel === level)
} 
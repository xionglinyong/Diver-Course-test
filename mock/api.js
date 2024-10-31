import { 
  orderList, 
  dailyCourseList, 
  userList, 
  coachList, 
  courseList 
} from './index'

// 模拟网络延迟
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

// 统一返回格式
const responseWrapper = (data, msg = 'success', code = 0) => ({
  code,
  msg,
  data
})

export const mockApi = {
  // 订单相关接口
  async getOrderList({ userId, status, type, page = 1, pageSize = 10 }) {
    await delay()
    let result = [...orderList]
    
    if (userId) {
      result = result.filter(order => order.userId === userId)
    }
    if (status) {
      result = result.filter(order => order.status === status)
    }
    if (type) {
      result = result.filter(order => order.type === type)
    }

    const start = (page - 1) * pageSize
    const end = start + pageSize
    const total = result.length
    
    return responseWrapper({
      list: result.slice(start, end),
      total,
      page,
      pageSize
    })
  },

  // 课程相关接口
  async getDailyCourseList({ date, coachId, status }) {
    await delay()
    let result = [...dailyCourseList]
    
    if (date) {
      result = result.filter(course => course.date === date)
    }
    if (coachId) {
      result = result.filter(course => course.coach.id === coachId)
    }
    if (status) {
      result = result.filter(course => course.status === status)
    }
    
    return responseWrapper(result)
  },

  // 用户相关接口
  async getUserInfo(userId) {
    await delay()
    const user = userList.find(user => user.id === userId)
    if (!user) {
      return responseWrapper(null, '用户不存在', 1)
    }
    return responseWrapper(user)
  },

  async getUserBookings(userId) {
    await delay()
    const bookedCourses = dailyCourseList.filter(course => 
      course.participants.some(p => p.userId === userId)
    )
    return responseWrapper(bookedCourses)
  },

  // 教练相关接口
  async getCoachList({ speciality }) {
    await delay()
    let result = [...coachList]
    
    if (speciality) {
      result = result.filter(coach => 
        coach.speciality.includes(speciality)
      )
    }
    
    return responseWrapper(result)
  },

  async getCoachDetail(coachId) {
    await delay()
    const coach = coachList.find(coach => coach.id === coachId)
    if (!coach) {
      return responseWrapper(null, '教练不存在', 1)
    }
    return responseWrapper(coach)
  },

  // 课程管理接口
  async getCourseList({ type, difficulty }) {
    await delay()
    let result = [...courseList]
    
    if (type) {
      result = result.filter(course => course.type === type)
    }
    if (difficulty) {
      result = result.filter(course => course.difficulty === difficulty)
    }
    
    return responseWrapper(result)
  },

  // 预约相关接口
  async bookCourse({ userId, courseId }) {
    await delay()
    const course = dailyCourseList.find(c => c.id === courseId)
    
    if (!course) {
      return responseWrapper(null, '课程不存在', 1)
    }
    if (course.currentParticipants >= course.maxParticipants) {
      return responseWrapper(null, '课程已满', 2)
    }
    if (course.participants.some(p => p.userId === userId)) {
      return responseWrapper(null, '已预约过该课程', 3)
    }
    
    return responseWrapper({ success: true })
  },

  // 订单操作接口
  async createOrder(orderData) {
    await delay()
    return responseWrapper({ orderId: `ORD${Date.now()}` })
  },

  async cancelOrder(orderId) {
    await delay()
    const order = orderList.find(o => o.id === orderId)
    if (!order) {
      return responseWrapper(null, '订单不存在', 1)
    }
    return responseWrapper({ success: true })
  }
} 
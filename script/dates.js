//  Dates
const today = new Date()
today.setHours(0, 0, 0, 0)

const yesterday = new Date(today.getTime()).setDate(today.getDate() - 1)
const tomorrow = new Date(today.getTime()).setDate(today.getDate() + 1)
const weekAgo = new Date(today.getTime()).setDate(today.getDate() - 7)
const nextWeek = new Date(today.getTime()).setDate(today.getDate() + 7)
const monthAgo = new Date(today.getTime()).setDate(today.getDate() - 30)
const quarterAgo = new Date(today.getTime()).setDate(today.getDate() - 90)
const sixMonthsAgo = new Date(today.getTime()).setDate(today.getDate() - 180)

module.exports = {
  today,
  yesterday,
  tomorrow,
  weekAgo,
  nextWeek,
  monthAgo,
  quarterAgo,
  sixMonthsAgo
}

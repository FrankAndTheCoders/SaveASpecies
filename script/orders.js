//  Dates
const today = new Date()
const yesterday = new Date().setDate(today.getDate() - 1)
const weekAgo = new Date().setDate(today.getDate() - 7)
const monthAgo = new Date().setDate(today.getDate() - 30)
const quarterAgo = new Date().setDate(today.getDate() - 90)
const nextWeek = new Date().setDate(today.getDate() + 7)

module.exports = [
  // {totalAmount: 2500000},
  //  CD -  2 past purchases
  {purchaseDate: yesterday, totalAmount: 3800000, isPurchased: true},
  {purchaseDate: weekAgo, totalAmount: 5750000, isPurchased: true},
  //  EF -  2 past purchases with different purchase points
  {purchaseDate: quarterAgo, totalAmount: 3800000, isPurchased: true},
  {purchaseDate: monthAgo, totalAmount: 5750000, isPurchased: true},
  //  GH -  Active cart - no history
  {purchaseDate: null, totalAmount: null, isPurchased: false},
  //  IJ -  Active cart - 2 past purchases
  {purchaseDate: null, totalAmount: null, isPurchased: false},
  {purchaseDate: quarterAgo, totalAmount: 4550000, isPurchased: true},
  {purchaseDate: monthAgo, totalAmount: 2450000, isPurchased: true},
  //  KL - Active cart - 2 past purchases
  {purchaseDate: null, totalAmount: null, isPurchased: false},
  {purchaseDate: quarterAgo, totalAmount: 4550000, isPurchased: true},
  {purchaseDate: monthAgo, totalAmount: 2450000, isPurchased: true},
  //  MN -  Active cart - 2 past purchases
  {purchaseDate: null, totalAmount: null, isPurchased: false},
  {purchaseDate: quarterAgo, totalAmount: 4550000, isPurchased: true},
  {purchaseDate: monthAgo, totalAmount: 2450000, isPurchased: true},
  //  OP -  Active cart - 2 past purchases
  {purchaseDate: null, totalAmount: null, isPurchased: false},
  {purchaseDate: quarterAgo, totalAmount: 4550000, isPurchased: true},
  {purchaseDate: monthAgo, totalAmount: 2450000, isPurchased: true}
]

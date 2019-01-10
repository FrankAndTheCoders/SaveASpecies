const {
  today,
  yesterday,
  tomorrow,
  weekAgo,
  nextWeek,
  monthAgo,
  quarterAgo,
  sixMonthsAgo
} = require('./dates')

module.exports = [
  //  CD -  2 past purchases
  {purchaseDate: monthAgo, isPurchased: true},
  {purchaseDate: sixMonthsAgo, totalAmount: 5750000, isPurchased: true},
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

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

const currentPrices = [
  {
    currentPrice: 100,
    effectiveDate: today
  },
  {
    currentPrice: 100,
    effectiveDate: yesterday
  },
  {
    currentPrice: 100,
    effectiveDate: weekAgo
  },
  {
    currentPrice: 100,
    effectiveDate: yesterday
  },
  {
    currentPrice: 100,
    effectiveDate: weekAgo
  },
  {
    currentPrice: 100,
    effectiveDate: weekAgo
  },
  {
    currentPrice: 100,
    effectiveDate: yesterday
  },
  {
    currentPrice: 100,
    effectiveDate: yesterday
  },
  {
    currentPrice: 100,
    effectiveDate: yesterday
  },
  {
    currentPrice: 100,
    effectiveDate: today
  },
  {
    currentPrice: 100,
    effectiveDate: today
  },
  {
    currentPrice: 100,
    effectiveDate: today
  }
]

const monthAgoPrices = [
  {currentPrice: 300000, effectiveDate: monthAgo},
  {currentPrice: 4000000, effectiveDate: monthAgo},
  {currentPrice: 5000000, effectiveDate: monthAgo},
  {currentPrice: 6500000, effectiveDate: monthAgo},
  {currentPrice: 1500000, effectiveDate: monthAgo},
  {currentPrice: 100000, effectiveDate: monthAgo},
  {currentPrice: 7500000, effectiveDate: monthAgo},
  {currentPrice: 8000000, effectiveDate: monthAgo},
  {currentPrice: 9000000, effectiveDate: monthAgo},
  {currentPrice: 300000, effectiveDate: monthAgo},
  {currentPrice: 500000, effectiveDate: monthAgo},
  {currentPrice: 1100000, effectiveDate: monthAgo}
]
const quarterAgoPrices = [
  {currentPrice: 400000, effectiveDate: quarterAgo},
  {currentPrice: 5000000, effectiveDate: quarterAgo},
  {currentPrice: 5500000, effectiveDate: quarterAgo},
  {currentPrice: 7500000, effectiveDate: quarterAgo},
  {currentPrice: 2500000, effectiveDate: quarterAgo},
  {currentPrice: 150000, effectiveDate: quarterAgo},
  {currentPrice: 3500000, effectiveDate: quarterAgo},
  {currentPrice: 4000000, effectiveDate: quarterAgo},
  {currentPrice: 6000000, effectiveDate: quarterAgo},
  {currentPrice: 350000, effectiveDate: quarterAgo},
  {currentPrice: 530000, effectiveDate: quarterAgo},
  {currentPrice: 1300000, effectiveDate: quarterAgo}
]
const sixMonthsAgoPrices = [
  {currentPrice: 200000, effectiveDate: sixMonthsAgo},
  {currentPrice: 6000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 3500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 8500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 1000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 1500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 9000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 3000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 330000, effectiveDate: sixMonthsAgo},
  {currentPrice: 510000, effectiveDate: sixMonthsAgo},
  {currentPrice: 1100000, effectiveDate: sixMonthsAgo}
]
const pastPrices = [
  ...monthAgoPrices,
  ...quarterAgoPrices,
  ...sixMonthsAgoPrices
]

const futurePrices = [
  {currentPrice: 400000, effectiveDate: sixMonthsAgo},
  {currentPrice: 8000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 5500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 9500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 400000, effectiveDate: sixMonthsAgo},
  {currentPrice: 1500000, effectiveDate: sixMonthsAgo},
  {currentPrice: 1000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 6000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 1000000, effectiveDate: sixMonthsAgo},
  {currentPrice: 230000, effectiveDate: sixMonthsAgo},
  {currentPrice: 310000, effectiveDate: sixMonthsAgo},
  {currentPrice: 2100000, effectiveDate: sixMonthsAgo}
]

module.exports = {
  currentPrices,
  pastPrices,
  monthAgoPrices,
  sixMonthsAgoPrices,
  quarterAgoPrices,
  futurPrices: futurePrices
}

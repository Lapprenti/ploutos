enum Currencies {
  EUR, USD, JPY, GBP, AUD, CHF, CAD, HKD, SEK, NZD
}

export interface IExpense {
  idCategory: number;
  amount: number;
  currency: Currencies
  tax: number,
  date: Date
}
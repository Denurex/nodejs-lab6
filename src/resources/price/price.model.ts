import { v4 as uuidv4 } from 'uuid'
import { TPriceModel, TPriceResponse } from './price.type';

const formatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

class Price {
  id: string;
  scheduleID: string;
  priceValue: number;
  priceCurrency: number;
  createdAt: string;
  updatedAt: string;

  constructor({
    id = uuidv4(),
    scheduleID = 'Test',
    priceValue = 10,
    priceCurrency = 20,
    createdAt = formatter.format(new Date()),
    updatedAt = formatter.format(new Date()),
  } ={}) {
    this.id = id;
    this.scheduleID = scheduleID;
    this.priceValue = priceValue;
    this.priceCurrency = priceCurrency;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static toResponse(price: TPriceModel): TPriceResponse  {
    const { id, scheduleID, priceValue, priceCurrency, createdAt, updatedAt } = price;
    return { id, scheduleID, priceValue, priceCurrency, createdAt, updatedAt };
  }
}


export default Price;
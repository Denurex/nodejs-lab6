import { v4 as uuidv4 } from 'uuid';

const formatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

class Price {
  constructor({ id = uuidv4(),
      now = new Date(),
      scheduleID = 'Test', 
      priceValue = 10,
      priceCurrency = 20,
      createdAt = formatter.format(now),
      updateAt = formatter.format(now)
    } = {}) {
      this.id = id;
      this.scheduleID = scheduleID;
      this.priceValue = priceValue;
      this.priceCurrency = priceCurrency;
      this.createdAt = createdAt;
      this.updateAt = updateAt;
  }

  static toResponse(price) {
    const { id, scheduleID, priceValue, priceCurrency, createdAt, updateAt} = price;
    return { id, scheduleID, priceValue, priceCurrency, createdAt, updateAt };
  }
}

export default Price;
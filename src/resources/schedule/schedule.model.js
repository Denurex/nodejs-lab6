import { v4 as uuidv4 } from 'uuid';

const formatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

class Schedule {
  constructor({ id = uuidv4(),
      now = new Date(),
      productID = 'Test', 
      isActive = false,
      startDate = '2020-01-02',
      endDate = '2020-01-03',
      createdAt = formatter.format(now),
      updateAt = formatter.format(now)
    } = {}) {
      this.id = id;
      this.productID = productID;
      this.isActive = isActive;
      this.startDate = startDate;
      this.endDate = endDate;
      this.createdAt = createdAt;
      this.updateAt = updateAt;
  }

  static toResponse(schedule) {
    const { id, productID, isActive, startDate, endDate, createdAt, updateAt} = schedule;
    return { id, productID, isActive, startDate, endDate, createdAt, updateAt };
  }
}

export default Schedule;
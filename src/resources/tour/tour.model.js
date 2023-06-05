import { v4 as uuidv4 } from 'uuid';

const formatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

class Tour {
  constructor({ id = uuidv4(),
      now = new Date(),
      title = 'Test', 
      slug = 'tset',
      description = 'description',
      isActive = false,
      createdAt = formatter.format(now),
      updateAt = formatter.format(now)
    } = {}) {
      this.id = id;
      this.title = title;
      this.slug = slug;
      this.description = description;
      this.isActive = isActive;
      this.createdAt = createdAt;
      this.updateAt = updateAt;
  }

  static toResponse(tour) {
    const { id, title, slug, description, isActive, createdAt, updateAt } = tour;
    return { id, title, slug, description, isActive, createdAt, updateAt };
  }
}

export default Tour;
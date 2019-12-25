import { Repository } from 'typeorm';

export class ServiceBase<T> {
  constructor(private readonly repository: Repository<T>) {}

  findOne(id: number): Promise<T> {
    return this.repository.findOne(id);
  }

  find(): Promise<T[]> {
    return this.repository.find();
  }
}

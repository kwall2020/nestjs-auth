import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

export class ServiceBase<T> {
  constructor(private readonly repository: Repository<T>) {}

  find(): Promise<T[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<T> {
    return this.repository.findOne(id);
  }

  update(id: number, partialEntity: any): Promise<UpdateResult> {
    return this.repository.update(id, partialEntity);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  insert(entity: any): Promise<InsertResult> {
    return this.repository.insert(entity);
  }
}

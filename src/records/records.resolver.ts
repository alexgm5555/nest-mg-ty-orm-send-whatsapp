import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RecordsService } from './records.service';
import { CreateRecordInput } from './dto/create-record.input';
import { RecordsType } from './records.type';

@Resolver(of => RecordsType)
export class RecordsResolver {
  constructor(
    private readonly recordsService: RecordsService
  ) {}

  @Mutation(returns => RecordsType)
  create(@Args('createRecordInput') createRecordInput: CreateRecordInput) {
    return this.recordsService.create(createRecordInput);
  }

  @Query(returns => RecordsType)
  findAll() {
    return this.recordsService.findAll();
  }

  // @Query('record')
  // findOne(@Args('id') id: number) {
  //   return this.recordsService.findOne(id);
  // }

}

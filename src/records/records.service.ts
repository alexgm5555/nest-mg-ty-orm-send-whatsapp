import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateRecordInput } from './dto/create-record.input';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

import { Record } from './entities/record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecordsService {
  // paramanejar mejor los errores y que en la consola te muetre mas lindo elerror
  private readonly logger = new Logger('RecordsService');
  
  constructor(
    //Patron repositorio
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}

  async create(createRecordInput: CreateRecordInput): Promise<Record>  {
    try {
      let { id, ...recordData } = createRecordInput;
      id = uuid();
      const request_date = new Date().toLocaleString("es-MX", {timeZone: "America/Bogota"})
      const record = this.recordRepository.create({
        id,
        request_date,
        ...recordData
      });
      return this.recordRepository.save(record);
    } catch (error) {
      this.handleDBExeptions(error);
    }
  }

  findAll() {
    return `This action returns all records`;
  }

  findOne(id: number) {
    return `This action returns a #${id} record`;
  }


  private handleDBExeptions(error: any) {
    // esta condicion se hace para enviar en el message del request el error
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException('Help!');
  }
}

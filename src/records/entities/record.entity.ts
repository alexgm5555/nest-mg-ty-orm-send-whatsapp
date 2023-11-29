import { Optional } from "@nestjs/common";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Record {
  @ObjectIdColumn()
  _id: string;

  @Column('text',{
    default: '',
  })
  id: string;

  @Column('text', {
    default: '',
  })
  // @Column('uuid')
  id_company: string;

  @Column('text')
  name: string;

  @Column('text')
  phone: string;

  @Column('text', {
    default: '001',
  })
  id_role?: string;

  @Column('text',{
    default: new Date(),
  })
  request_date?: string;

  // @Column('uuid')
  @Column('text', {
    default: '',
  })
  id_company_root: string;
}

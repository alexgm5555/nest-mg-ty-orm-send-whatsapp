import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Records') 
export class RecordsType {
  @Field()
  id: string;
  
  @Field()
  id_company: string;

  @Field()
  name: string;
  
  @Field()
  phone: string;

  @Field()
  id_role: string;

  @Field()
  request_date: string;

  @Field()
  id_company_root: string;
}
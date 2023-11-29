import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString, IsDate} from 'class-validator';
import { Entity } from 'typeorm';

@InputType()
export class CreateRecordInput {
  @Field({
    nullable: false,
    defaultValue: '' })
  @IsString()
  id?: string;
  
  @Field({
    nullable: false,
    defaultValue: '' })
  @IsString()
  id_company?: string;

  @Field({
    nullable: false,
    defaultValue: '' })
  @IsString()
  name?: string;

  @Field()
  @IsString()
  phone: string;

  @Field({
  nullable: false,
  defaultValue: '0001' })
  @IsString()
  id_role?: string;

  @Field({
    nullable: false,
    defaultValue: '' })
  @IsString()
  id_company_root?: string;
}

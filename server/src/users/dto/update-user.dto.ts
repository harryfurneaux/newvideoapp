import {  IsOptional } from 'class-validator';
export class UpdateUserDto {

    @IsOptional()
    name: string;
    @IsOptional()
    location: string;
    @IsOptional()
    company_name: string
    @IsOptional()
    birth_date: Date;
    @IsOptional()
    email: string
    @IsOptional()
    password: string
}
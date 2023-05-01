import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Matches } from '@libs/boat/validator';
import { Exists } from "@libs/boat/validator/exists";

export class LoginDto{

    @Transform(({ value }) => {
        return value.toString().toLowerCase();
      })
      @Exists({ table: 'users', column: 'email' })
      @Matches(/^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-z]{2,3}/, {
        message: 'Invalid Email Id!',
      })
      @IsString()
      @IsEmail({}, { message: 'Invalid Email Id!' })
      @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
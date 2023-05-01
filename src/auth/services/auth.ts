import { Inject, Injectable } from "@nestjs/common";
import { UserLibConstants } from "../constant";
import { UserRepository } from '../repositories/auth/database';
import { UserModel } from "@app/user";
import { LoginDto } from "../dto/auth";

@Injectable()
export class AuthLibService{
    constructor(
        @Inject(UserLibConstants.USER_REPOSITORY)
        private readonly repo: UserRepository
    ){}

    async login(inputs:LoginDto){

    }
}
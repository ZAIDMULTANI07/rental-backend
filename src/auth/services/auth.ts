import { Inject, Injectable } from "@nestjs/common";
import { UserLibConstants } from "../constant";
import { UserRepository } from '../repositories/auth/database';

@Injectable()
export class AuthLibService{
    constructor(
        @Inject(UserLibConstants.USER_REPOSITORY)
        private readonly repo: UserRepository
    ){

    }
}
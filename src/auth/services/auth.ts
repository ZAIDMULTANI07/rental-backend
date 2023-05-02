import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserLibConstants } from "../constant";
import { UserRepository } from '../repositories/auth/database';
import { BaseValidator } from "@libs/boat/validator";
import { IUser } from "@app/common/interface";
import { CreateUserDto } from "../dto/auth";
import { UserModel } from "@app/user";

@Injectable()
export class AuthApisService{
    constructor(
        @Inject(UserLibConstants.USER_REPOSITORY)
        private readonly repo: UserRepository,
        // private readonly userLibService: UserLibService,
        private readonly validator: BaseValidator,
    ){}


    // async signup(inputs: CreateUserDto, user: UserModel): Promise<IUser> {
    //     const users = await this.repo.create(inputs)
    //     return { ...users };
    //   }

}
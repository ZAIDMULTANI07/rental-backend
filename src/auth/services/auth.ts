import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserLibConstants } from "../constant";
import { UserRepository } from '../repositories/auth/database';
import { UserModel } from "@app/user";
import { LoginDto } from "../dto/auth";
import { IUser } from "@app/common/interface";

@Injectable()
export class AuthApisService{
    constructor(
        @Inject(UserLibConstants.USER_REPOSITORY)
        private readonly repo: UserRepository
    ){}

//     async login(inputs: LoginUserDTO): Promise<IUser> {
    
//         const user = await this.userLibService.repo
//           .query()
//           .findOne({ email })
//           .whereIn('role', [1, 2]);
//         if (!user) throw new UnauthorizedException('User does not exists');
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//           throw new UnauthorizedException('Invalid Credentials');
//         }
//         const token = await this.jwt.signAsync({ sub: user.id });
//         return { ...user, token };
//       }
}
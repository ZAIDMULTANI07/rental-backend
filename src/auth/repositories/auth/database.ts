import { AuthModel } from "@app/auth/models/auth";
import { IUser } from "@app/common/interface";
import { DatabaseRepository, InjectModel, RepositoryContract } from '@squareboat/nestjs-objection';
import { AuthRepositoryContract } from "./contract";
import { Inject } from "@nestjs/common";

export class UserRepository extends DatabaseRepository<AuthModel> implements AuthRepositoryContract {
    @InjectModel(AuthModel)
    model: AuthModel;
}
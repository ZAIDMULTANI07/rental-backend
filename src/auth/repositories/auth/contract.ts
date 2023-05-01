import { AuthModel } from "@app/auth/models/auth";
import { RepositoryContract } from "@squareboat/nestjs-objection";

export type AuthRepositoryContract = RepositoryContract<AuthModel>;
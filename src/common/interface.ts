import { ObjectionModel } from "@libs/boat";

export interface IUser extends ObjectionModel {
    id?: number;
    ulid?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: number;
    createdAt?: Date;
    updatedAt?: Date;
    token?: string;
  }
  
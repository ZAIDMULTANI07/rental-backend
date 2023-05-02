import { IUser } from '@app/common/interface';
import { Transformer } from '@libs/boat';

export class UserTransformer extends Transformer {
  async transform(input: IUser): Promise<Record<string, any>> {
    return {
      user: {
        id: input.ulid,
        name: input.name,
        email: input.email,
        role: input.role,
        token: input.token,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
      },
    };
  }
}

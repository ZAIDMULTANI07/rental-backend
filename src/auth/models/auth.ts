import { UserModel } from '@app/user';
import { BaseModel } from '@squareboat/nestjs-objection';



export class AuthModel extends BaseModel {
//   static tableName = 'meeting_links';

//   static relationMappings = {
//     host: {
//       relation: BaseModel.BelongsToOneRelation,
//       modelClass: UserModel,
//       join: {
//         from: 'meeting_links.userId',
//         to: 'users.id',
//       },
//     },

//     sessions: {
//       relation: BaseModel.HasManyRelation,
//       modelClass: MeetingSessionModel,
//       join: {
//         from: 'meeting_links.id',
//         to: 'meeting_sessions.meetingLinkId',
//       },
//     },
//   };

  id: number;
  ulid?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: number;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
}

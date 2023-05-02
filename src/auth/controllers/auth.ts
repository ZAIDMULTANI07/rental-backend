import { Request, Response, RestController } from "@libs/boat";
import { Controller, Post,Req,Res } from "@nestjs/common";
import { AuthApisService } from "../services/auth";
import { Dto, Validate } from '@libs/boat/validator';
import { CreateUserDto, LoginDto } from "../dto/auth";
import { UserTransformer } from "@app/transformer/user/user";

@Controller('auth')
export class AuthController extends RestController {
    constructor(
        private readonly service: AuthApisService
        ){
        super();
    }

    // @Post('/signup')
    // @Validate(CreateUserDto)
    // async login(
    //   @Dto() dto: CreateUserDto,
    //   @Res() res: Response,
    //   @Req() req: Request,
    // ): Promise<Response> {
    //   const user = await this.service.signup(dto, req.user);
    //     return res.success(
    //     await this.transform(user, new UserTransformer(), { req }),
    //   );
  
    // }
  }



import { RestController } from "@libs/boat";
import { Controller, Post, Res } from "@nestjs/common";
import { AuthLibService } from "../services/auth";
import { Dto, Validate } from '@libs/boat/validator';
import { LoginDto } from "../dto/auth";

@Controller('auth')
export class AuthController extends RestController {
    constructor(
        private readonly service: AuthLibService
        ){
        super();
    }

    // @Post('/login')
    // @Validate(LoginDto)
    // async login(
    //   @Dto() dto: LoginDto,
    //   @Res() res: Response,
    // ): Promise<Response> {
    //   const user = await this.service.login(dto);
    //   return res.success(user)
  
    // }
  }



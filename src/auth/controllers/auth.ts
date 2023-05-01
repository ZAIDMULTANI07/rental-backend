import { RestController } from "@libs/boat";
import { Controller } from "@nestjs/common";
import { AuthLibService } from "../services/auth";

@Controller('auth')
export class AuthController extends RestController {
    constructor(
        private readonly service: AuthLibService
        ){
        super();
    }
}


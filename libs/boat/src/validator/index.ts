import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { BaseValidator } from './basevalidator';
// import { CustomValidationPipe } from './customValidation';
export * from 'class-validator';
export * from './decorators';
export { BaseValidator };
export function Validate(Dto: any) {
  return applyDecorators(
    SetMetadata('dtoSchema', Dto),
    // UseGuards(CustomValidationPipe),
  );
}
export const Dto = createParamDecorator(
  (data: Record<string, any>, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request._dto;
  },
);

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RandomService } from "./random.service";
import { RandomControllerBase } from "./base/random.controller.base";

@swagger.ApiTags("randoms")
@common.Controller("randoms")
export class RandomController extends RandomControllerBase {
  constructor(
    protected readonly service: RandomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

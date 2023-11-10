import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RandomModuleBase } from "./base/random.module.base";
import { RandomService } from "./random.service";
import { RandomController } from "./random.controller";

@Module({
  imports: [RandomModuleBase, forwardRef(() => AuthModule)],
  controllers: [RandomController],
  providers: [RandomService],
  exports: [RandomService],
})
export class RandomModule {}

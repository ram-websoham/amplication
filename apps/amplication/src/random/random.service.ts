import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RandomServiceBase } from "./base/random.service.base";

@Injectable()
export class RandomService extends RandomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

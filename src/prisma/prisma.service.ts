import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

import { main } from "../../prisma/seed";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async clearDatabase() {
    // await this.$transaction([this.user.deleteMany(), this.hero.deleteMany()]);
    await main();
  }
}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule } from "@/auth/auth.module";
import { CaslModule } from "@/casl/casl.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { UserModule } from "@/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    CaslModule,
    UserModule,
  ],
})
export class AppModule {}

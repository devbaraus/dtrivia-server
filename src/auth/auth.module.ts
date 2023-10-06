import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { AuthController } from "@/auth/auth.controller";
import { AuthService } from "@/auth/auth.service";
import { JwtStrategy } from "@/auth/strategy";
import { UserModule } from "@/user/user.module";
import { UserRepository } from "@/user/user.repository";

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    UserRepository,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtGuard,
    // },
  ],
})
export class AuthModule {}

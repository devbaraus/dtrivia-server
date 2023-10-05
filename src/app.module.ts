import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmojiGameModule } from "./emoji-game/emoji-game.module";
import { HeroModule } from "./hero/hero.module";
import { MatchModule } from "./match/match.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HeroModule,
    UserModule,
    EmojiGameModule,
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

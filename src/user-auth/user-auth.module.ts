import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user-auth.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: "102030",
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  controllers: [UserAuthController],
  providers: [UserAuthService],
})

export class UserAuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
   }
}
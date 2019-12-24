import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fromEntities from './core/entities';
import * as fromServices from './core/services';
import * as fromControllers from './controllers';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60s'
      }
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([...fromEntities.entities])
  ],
  providers: [JwtStrategy, ...fromServices.services],
  controllers: [...fromControllers.controllers]
})
export class AppModule {}

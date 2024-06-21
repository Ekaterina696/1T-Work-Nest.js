import { Controller, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
// import { Controller, UseGuards, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from 'src/auth/auth.service';

// @Controller('users')
// export class UsersController {
//   constructor(
//     private readonly usersService: UsersService,
//     private authService: AuthService
//   ) {}

//   @Post('/register')
//   register(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.register(createUserDto);
//   }

//   @UseGuards(AuthGuard('local'))
//   @Post('/login')
//   async login(@Request() req) {
//     return this.authService.login(req.user);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
// }

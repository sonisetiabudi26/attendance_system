import {LoginUserDto} from './login-user.dto';
export class LoginResponseDto {
  accessToken: string;

  refreshToken: string;

  tokenType: string;

  expiresIn: number;
  
  user: LoginUserDto;
}
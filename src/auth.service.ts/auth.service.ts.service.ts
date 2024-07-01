import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthServiceTsService {

    constructor(private jwtService: JwtService) {}

    async generateToken(payload: any): Promise<string> {
        return this.jwtService.sign(payload);
    }

    async validateToken(token: string): Promise<string> {
        try {
            const payload = await this.jwtService.verify(token);
            return payload;
        } catch (error) {
            return null;
        }
        
    }
}


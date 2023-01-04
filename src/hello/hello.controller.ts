import { BadRequestException, Body, Controller, Get, ImATeapotException, NotFoundException, Param, Post } from '@nestjs/common';
import { HelloService } from './hello.service';
import { hello } from './interfaces/hello.interface';


//localhost:3000/hello
@Controller('hello')
export class HelloController {
    constructor(private readonly _helloService : HelloService){}

//localhost:3000/hello/:country => localhost:3000/hello/it
    @Get(':country')
    GetHello(@Param() param){
        return this._helloService.SayHello(param.country)
    }

    @Post()
    PostHello(@Body() hello : hello){
        if (!hello.country) {
            throw new BadRequestException('CPT')
        }
        return this._helloService.SayHello(hello.country)
    }

}

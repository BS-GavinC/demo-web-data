import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { WikiService } from './wiki.service';

@Controller('wiki')
export class WikiController {
    constructor(private readonly _wikiService : WikiService){}

    @Get()
    GetMonthly(){
        return this._wikiService.GetMonthly()
    }

    @Get(':year/:page')
    async GetMonthly2(@Param() params){
        
        return await this._wikiService.GetMonthly2(params.year, params.page)
    }


}

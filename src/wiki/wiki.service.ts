import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { Observable, map, firstValueFrom} from 'rxjs'
import { MonthlyData } from './interfaces/monthly-data.interface';

@Injectable()
export class WikiService {

    constructor(private readonly _httpService : HttpService){}

    GetMonthly() : Observable<any>{
        return this._httpService.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/Donald_Trump/monthly/2016010100/2016123100'
        ).pipe(map(res => {
            return res.data
        }))
    }

    async GetMonthly2(year : string, page : string) : Promise<MonthlyData[]> {

        let monthly : MonthlyData[] = []

        const value = await firstValueFrom(this._httpService.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/' + page +'/monthly/' + year + '010100/' + year + '123100'
        ))
        let cpt = 0;
        for(let item of value.data.items){
            cpt++
            monthly.push({
                name : cpt + '-' + year,
                value : item.views
            })
        }

        return monthly
    }


}

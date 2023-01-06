import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { Observable, map, firstValueFrom} from 'rxjs'
import { MonthlyData } from './interfaces/monthly-data.interface';

@Injectable()
export class WikiService {

    constructor(private readonly _httpService : HttpService){}

    GetMonthly() : Observable<any>{
        return this._httpService.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/fr.wikipedia/all-access/all-agents/Donald_Trump/monthly/2016010100/2016123100'
        ).pipe(map(res => {
            return res.data
        }))
    }

    async GetMonthly2(year : string, page : string) : Promise<MonthlyData[]> {

        let monthly : MonthlyData[] = []

        const value = await firstValueFrom(this._httpService.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/fr.wikipedia/all-access/all-agents/' + page +'/monthly/' + year + '010100/' + year + '123100'
        ))
        for(let item of value.data.items){

            let month : string

            switch(item.timestamp.substring(4,6)){
                case '01':
                    month = 'Janvier'
                    break
                case '02':
                    month = 'Fevrier'
                    break
                case '03':
                    month = 'Mars'
                    break
                case '04':
                    month = 'Avril'
                    break
                case '05':
                    month = 'Mai'
                    break
                case '06':
                    month = 'Juin'
                    break
                case '07':
                    month = 'Juillet'
                    break
                case '08':
                    month = 'Aout'
                    break
                case '09':
                    month = 'Septembre'
                    break
                case '10':
                    month = 'Octobre'
                    break
                case '11':
                    month = 'Novembre'
                    break
                case '12':
                    month = 'Decembre'
                    break
                default : 
                month = ''
                    break

            }
            
            monthly.push({
                name : month + ' ' + year,
                value : item.views
            })
        }

        return monthly
    }


}

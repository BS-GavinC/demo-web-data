import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

    SayHello(country : string){
        switch (country) {
            case 'en':
                return 'Hello World!'
                break;
            case 'fr':
                return 'Bonjour Monde!'
                break;
            case 'de':
                return 'Hallo Welt!'
                break;
            case 'nl':
                return 'Hallo Wereld!'
                break;
            case 'ar':
                return 'Marhaban bikom!'
                break;
            case 'es':
                return 'Hola Mundo!'
                break;
            case 'it':
                return 'Ciao Mondo!'
                break;
            default:
                return 'Good bye !'
                break;
        }
    }

}

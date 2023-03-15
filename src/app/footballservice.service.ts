import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FootballserviceService {

  constructor(private http:HttpClient) { }

  static MarketName:any;

  gamedata(){
    return this.http.get('http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1')
   }
 
   Legs(){
     return this.http.get('http://cms.bettorlogic.com/api/BetBuilder/GetSelections?sports=1')
   }
 
   Markets(){
     return  this.http.get('http://cms.bettorlogic.com/api/BetBuilder/GetMarkets?sports=1')
   }

   public static getSelectedMarketName(){
    return this.MarketName;
   }
   public static setSelectedMarketName(MarketName:any){
     this.MarketName=MarketName;
   }
}

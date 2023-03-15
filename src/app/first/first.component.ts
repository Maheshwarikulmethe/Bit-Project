import { Component } from '@angular/core';
import { FootballserviceService } from '../footballservice.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  filtered:  any;
  matchData:any;
  date = new Date();
  nextDate = new Date();
  nextDate1 = new Date();
  nextDate2 = new Date();
  nextDate3 = new Date();
  nextDate4 = new Date();
  nextDate5 = new Date();

  constructor(private userData:FootballserviceService){}
  
  ngOnInit() {
     
    this.nextDate.setDate(this.date.getDate() + 1);
    this.nextDate1.setDate(this.date.getDate() + 2);
    this.nextDate2.setDate(this.date.getDate() + 3);
    this.nextDate3.setDate(this.date.getDate() + 4);
    this.nextDate4.setDate(this.date.getDate() + 5);
    this.nextDate5.setDate(this.date.getDate() + 6);
    

    this.userData.gamedata().subscribe((result)=>{
      this.matchData=result;
     });

  }
  
  getMatchData(date:any){
    this.filtered = [];
    this.matchData.forEach((e:any)=>{
    console.log(new Date(e.KickOffUtc).getDate(),new Date(date).getDate())
    new Date(e.KickOffUtc).getDate()===new Date(date).getDate()?this.filtered.push(e):null
  })}

  saveSelectedMatchName(MatchName:any){
  FootballserviceService.setSelectedMarketName(MatchName)
 
  }
  
}

import { Component } from '@angular/core';
import { FootballserviceService } from '../footballservice.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  
  teamData:any;
  teamDataDisplay:any;
  day:any;
  selecteDate:any;
  secKickOffUtc:any;

  legData:any;
  marketData:any;
 
 
  isSelected: boolean | undefined;
  marketDataDisplay: any;
  legDataDisplay:any;
 
  selectedMarketName: any;
  selectedMatchName:any;
  selectedValue:any;
  output:any;
  

  date = new Date();
  
  constructor(private userData:FootballserviceService){}

  ngOnInit(){
    this.userData.gamedata().subscribe((result)=>{
      this.teamData=result;
     });
    
    this.userData.Legs().subscribe((result)=>{
     this.legData=result;
    })

    this.userData.Markets().subscribe((result)=>{
      this.marketData=result;
     })
  }

 //Team Display
  filterTeamData(day:any){
    var selectedMatchName = FootballserviceService.getSelectedMarketName();
    this.teamDataDisplay = [];
    this.teamData.forEach((e:any)=>{
   if(Object.values(e.MatchName) && new Date(e.KickOffUtc).getDate() && selectedMatchName===e.MatchName) {
    this.teamDataDisplay.push(e);
   }
  })}

  //Market and legs Display
  filterMarketData() {
     this.marketDataDisplay = this.marketData.find((s:any) => s.MarketName === this.selectedMarketName);
     this.legDataDisplay = this.legData.find((t:any) => t.selectionValue === Number(this.selectedValue));
     this.output= this.marketDataDisplay === this.legDataDisplay;
     this.isSelected=true;
    
  }
    
 }

  

      
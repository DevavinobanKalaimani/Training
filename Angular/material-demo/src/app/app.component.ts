import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  pictures=[
    {id:1, title:'Evil', img:"https://wallpapercave.com/fuwp/uwp2843070.jpeg", content:'A cruelly malicious person who is involved in or devoted to wickedness or crime; scoundrel; or a character in a play, novel, or the like, who constitutes an important evil agency in the plot'},
    {id:2, title:'Iron Man', img:"https://wallpapercave.com/uwp/uwp2843067.jpeg", content:"An American comic-book superhero who is a mainstay of Marvel Comics. Because of the character's widespread appeal, Iron Man has appeared in multiple comics, television series, and films."},
    {id:3, title:'Cap', img:"https://wallpapercave.com/uwp/uwp2843085.jpeg", content:"Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak of human perfection by an experimental 'super-soldier serum' after joining the military to aid the United States government's efforts in World War II."}];

  images=[
     {id:4, title:'Shield', img:"https://wallpapercave.com/fuwp/uwp2843081.jpeg", content:"A unique combination of Vibranium, steel alloy and a unknown third catalyst, that has never been duplicated, called Proto-Adamantium. It is virtually indestructible"},
    {id:5, title:'Venom', img:"https://wallpapercave.com/fuwp/uwp2843064.jpeg", content:'The character is a sentient alien symbiote with an amorphous, liquid-like form, who survives by bonding with a host, usually human. This dual-life form receives enhanced powers and usually refers to itself as "Venom".'},
    {id:6, title:'Spidey', img:"https://wallpapercave.com/fuwp/uwp2843087.jpeg", content:'Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces, uses self-designed web-shooters allowing him to fire and swing from sticky webs, special "Spider-Sense" warns of incoming danger, genius intellect specializing in chemistry and invention.'}
  ];

  hidden= false;
  
}

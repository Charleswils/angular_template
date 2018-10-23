import { Component } from '@angular/core';

export class question{

    imageName: string;
    options: string[];
    showImage: boolean;
    ID: number;
    answer: string;
}


@Component({
  selector: 'app',
  templateUrl: './pages/flashCard.html'
})

export class AppComponent{
  flashCard: question[];
  currentID = 1;

  constructor(){
      this.flashCard = [{
        imageName: "AJolie",
        options: ["Elizabeth Mark", "Nicki Minaj", "Celine Dion", "Angelina Jolie"],
        showImage: true,
        ID: 1,
        answer: "Angelina Jolie" 
      },
      {
        imageName: "drake",
        options: ["Eminem", "Chance the Rapper", "Drake", "Puff Daddy"],
        showImage: false,
        ID: 2,
        answer: "Drake"
      },
      {
        imageName: "Emma_Watson",
        options: ["Lady gaga", "Angelina Jolie", "Emma Watson", "Jennifer Lawrence"],
        showImage: false,
        ID: 3,
        answer: "Emma Watson"
      },
      {
        imageName: "Jennifer_lawrence",
        options: ["Jennifer Aniston", "Jennifer Lawrence", "Elizabeth Moore", "Tara hanson"],
        showImage: false,
        ID: 4,
        answer: "Jennifer Lawrence"
      }];

      //flashCards = this.flashCard;
    }  

 
  public checkAnswer(event: any){
    var currentIndex = (this.currentID - 1);
    var selectedValue = event.target.value;
    if(this.currentID <= this.flashCard.length){
        if(this.flashCard[currentIndex].answer == selectedValue){
            this.flashCard[currentIndex].showImage = false;
            // set the show image flag for the next object in the array
            if(this.currentID < this.flashCard.length){
              this.flashCard[currentIndex+1].showImage = true;
              this.currentID +=1;
            }
            else{
              alert("Congrats! you won!");
            }
        } 
        else{
            alert("Your answer is wrong! Try again!!");
        }  
    }
        //alert("sent ID: " + objectID);
  }
}


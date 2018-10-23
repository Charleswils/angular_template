System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var question, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            question = class question {
            };
            exports_1("question", question);
            AppComponent = class AppComponent {
                constructor() {
                    this.currentID = 1;
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
                checkAnswer(event) {
                    var currentIndex = (this.currentID - 1);
                    var selectedValue = event.target.value;
                    if (this.currentID <= this.flashCard.length) {
                        if (this.flashCard[currentIndex].answer == selectedValue) {
                            this.flashCard[currentIndex].showImage = false;
                            // set the show image flag for the next object in the array
                            if (this.currentID < this.flashCard.length) {
                                this.flashCard[currentIndex + 1].showImage = true;
                                this.currentID += 1;
                            }
                            else {
                                alert("Congrats! you won!");
                            }
                        }
                        else {
                            alert("Your answer is wrong! Try again!!");
                        }
                    }
                    //alert("sent ID: " + objectID);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './pages/flashCard.html'
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=component.app.js.map
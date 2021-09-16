class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter the corect option...")



    this.button = createButton('Submit');
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")
    this.question = createElement("h3")



    this.message = createElement("h2")
    this.message2 = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    this.message2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    this.question.html("Question: what starts and endis with E but has only one letter.(like the mail letter)")
    this.option1.html("1.Evryone")
    this.option2.html("2.E")
    this.option3.html("3.Envalope")
    this.option4.html("4.Eye")
    this.question.position(50, 100)
    this.option1.position(50, 150)
    this.option2.position(50, 170)
    this.option3.position(50, 190)
    this.option4.position(50, 210)



    this.input1.position(150, 280);
    this.input2.position(350, 280);
    this.button.position(290, 340);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     var ans = this.input2.value()
     var name = this.input1.value()
      if(ans === "3"){
     this.message.html("you win "+ name)
     this.message.position(350, 190)
      } else{
        this.message2.html("you lose "+ name)
        this.message2.position(350, 190)
      }
    })


  }
}

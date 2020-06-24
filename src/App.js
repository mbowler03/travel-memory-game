import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Pics from "./travel.json";
import "./App.css";

class App extends Component {
 
  state = {
    Pics,
    clickedPicIds: [],
    score: 0,
    goal: 10,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedPicIds = this.state.clickedPicIds;

    if(clickedPicIds.includes(id)){
      this.setState({ clickedPicIds: [], score: 0, status:  "You have the memory of an insect. Click to play again..." });
      return;
    }else{
      clickedPicIds.push(id)

      if(clickedPicIds.length === 10){
        this.setState({score: 10, status: "Congrats! You have the memory of an Elephant. Click to play again!", clickedPicIds: []});
        return;
      }

      this.setState({ Pics, clickedPicIds, score: clickedPicIds.length, status: " " });

      for (let i = Pics.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Pics[i], Pics[j]] = [Pics[j], Pics[i]];
      }
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Travel Memory Game</h1>
          <p className="App-intro">
            Try not to click the same image twice...Click any image to begin!
            </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.Pics.map(picture => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={picture.id}
              key={picture.id}
              image={picture.image}
            />
          ))}
        </Wrapper>
        <footer className="App-footer">
          <p>For more projects, please visit:
          <a href="https://matthewbbowler.com" target="" rel=""> matthewbbowler.com</a>.</p>
        </footer>
    </div>
    );
  }
}

export default App;

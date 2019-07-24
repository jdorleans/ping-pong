// @material-ui components
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Component from "component/Component";
import GridContainer from "component/grid/GridContainer";
import GridItem from "component/grid/GridItem";
import {CREATE_RESULT} from "graphql/result";
import Score from "page/game/Score";
// resources
import React from "react";
import style from "resources/jss/page/game/game";

class Game extends Component {

  initDefault() {
    if (!this.history.location.state) this.history.push("/game/new");
    const players = this.history.location.state || {};
    return {
      set: 1,
      isDeuce: false,
      service: 0,
      serving: 2,
      scores: [
        {idx: 0, name: players.p1, score: 0, wins: 0},
        {idx: 1, name: players.p2, score: 0, wins: 0}
      ],
      winner: -1,
      isEnd: false
    };
  }

  miss = idx => this.score(this.state.scores[(idx + 1) % 2].idx);

  score = idx => {
    const serving = this.state.serving - (this.state.isDeuce ? 2 : 1) || 2;
    const service = serving < 2 ? this.state.service : (this.state.service + 1) % 2;
    const score = this.state.scores[idx].score + 1;
    this.state.scores.splice(idx, 1, {...this.state.scores[idx], score});
    this.setState({
      service,
      serving,
      scores: this.state.scores
    }, () => this.update());
  };

  update = () => {
    const s1 = this.state.scores[0].score;
    const s2 = this.state.scores[1].score;
    const isDeuce = (s1 >= 10 && s2 >= 10);
    this.setState({isDeuce});
    let winner = -1;

    if (isDeuce) {
      if (s1 - s2 === 2) {
        winner = 0;
      } else if (s2 - s1 === 2) {
        winner = 1;
      }
    } else {
      if (s1 === 11 && s2 < 10) {
        winner = 0;
      } else if (s2 === 11 && s1 < 10) {
        winner = 1;
      }
    }
    if (winner > -1) {
      const wins = this.state.scores[winner].wins + 1;
      this.state.scores.forEach(s => s.score = 0);
      this.state.scores.splice(winner, 1, {...this.state.scores[winner], wins});
      this.setState({
        ...this.default,
        set: this.state.set + 1,
        scores: this.state.scores
      }, () => this.end());
    }
  };

  end = () => {
    const score = this.state.scores.find(s => s.wins >= 3);
    if (score) {
      this.setState({winner: score.idx, isEnd: true});
      const scores = this.state.scores.map(s => ({name: s.name, wins: s.wins}));
      this.mutate(CREATE_RESULT, {
        data: {
          sets: this.state.set - 1,
          isDeuce: this.state.isDeuce,
          scores: {
            create: scores
          },
          winner: score.name
        }
      });
    }
  };

  new = e => {
    e.preventDefault();
    this.reset();
    this.history.push("/game/new");
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <h2 className={classes.set}>
            {this.state.isEnd
              ? `${this.msg("game.winner")} ${this.state.scores[this.state.winner].name}!`
              : `${this.msg("game.set")} ${this.state.set}/5 ${this.state.isDeuce ? this.msg("game.deuce") : ""}`
            }
          </h2>
        </GridContainer>
        <GridContainer justify="center">
          {this.state.scores.map((s, i) => {
            const isService = !this.state.isEnd && i === this.state.service;
            return (
              <GridItem key={i} sm={6}>
                <Score
                  state={s}
                  service={isService}
                  onMiss={this.miss}
                  onScore={this.score}
                />
              </GridItem>
            );
          })}
        </GridContainer>
        <GridContainer justify="center">
          <Button disabled={!this.state.isEnd} color={"default"} size={"large"} className={classes.button} onClick={this.new}>
            {this.msg("game.new")}
          </Button>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Game);

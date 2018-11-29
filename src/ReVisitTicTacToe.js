import React, { Component } from 'react';
// import logo from './logo.svg';
// import PropTypes from 'prop-types';
import './tictactoe.css';
// import App from "./App";

// import TicTacToe from "./TicTacToe";

function Square(props) {
    // props.onClick refering to the parents onClick
    {/*<Square/> passed with these 2 props: value, onClick*/}
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {


    renderSquare(i) {
        return (


            // here: value, onClick these are properties of <Square/> component
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }





    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0, // indicate which step we’re currently viewing.
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // removes future histories 0 to stepNumber.
        // const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        /*
        let ay= "abc";
        let resultay= ay.concat("def");
        // ay and def are both array
        //similarly history is an array containing squares thus
        // history.concat([{
        //     squares: squares
        // }]),
        */


        this.setState({



            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            // 0 %2 = 0; 1 %2 =1 ; 2 % 2 = 0  ; ===0 means XIsNext;
        });
    }



    render() {
        const history = this.state.history;
        // const current = history[history.length - 1];
        const current = history[this.state.stepNumber];


        console.log("history is:",history);

        const winner = calculateWinner(current.squares);


        // map(single_item, index)
        const moves = history.map((step, move) => {
                const desc = move ?
                    'Go to move #' + move :
                    'Go to game start';
                return (
                    <li key={move}>
                        <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            }
        );

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">


                    {/*handleClick is a method in this component/ i.e. <Game/>*/}
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    {/*<ol>/!* TODO *!/</ol>*/}
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}



export default Game;


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        // console.log("a, b, c :::",a, b, c);
        //
        // console.log("----");
        //
        // console.log("lines["+i +"]:::",lines[i]);
        // console.log("----");

        // if squares[a] != null and  squares[a] equalt to
        // squares[b] and squares[a] equal to squares[c]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
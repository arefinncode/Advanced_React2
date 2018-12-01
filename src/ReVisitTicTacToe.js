import React from 'react';
// import logo from './logo.svg';
// import PropTypes from 'prop-types';
import './tictactoe.css';
// import App from "./App";

// import TicTacToe from "./TicTacToe";

function Square(props) {
    // props.onClick refering to the parents onClick
    {/*<Square/> passed with these 2 props: value, onClick*/}


    {/*<Square*/}
        {/*value={this.props.squares[i]}*/}
        {/*onClick={() => this.props.onClick(i)}*/}
    {/*/>*/}
    // What was passed to Sqare functional component.


    // Where props.value can be any of null, 'X' or 'O'
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {


    // squares={current.squares}
    // onClick={(i) => this.handleClick(i)}
    // This 2 props (squares [used in <Square/> component] and onClicks were passed from Game component.
    renderSquare(i) {
        return (


            // here: value, onClick these are properties of <Square/> component
            // Game component > Board component > Square Component
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
            // history contains current Game status , whic have 9 squares, initially null.
            stepNumber: 0, // indicate which step we’re currently In , initially 0.
            xIsNext: true // X and O are 2 palyers , if not X then it is O.
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);

        // removes future histories 0 to stepNumber.
        // const history = this.state.history;
        // var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        // console.log(animals.slice(2, 4));
        // expected output: Array ["camel", "duck"]
        // purpose: stores history for "Go To Move # A feature implementation.
        // state contains history [] / array, which contains square objects {}, each squares object
        // have 9 arrays
        // history: [{            squares: Array(9).fill(null)        }],

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
        // history contains every history from begining while
        // current contains current situation check console
        // log output.

        console.log("current is: ",current);


        console.log("history is:",history);

        const winner = calculateWinner(current.squares);
        // current is single history which have square object containing 9 arrays

        // state contains history array [] , which contains square objects {}, each squares object
        // have 9 arrays
        // history: [{            squares: Array(9).fill(null)        }],


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
                    {/*For current.squares check above*/}
                    {/*i is the square upon whick click occurred*/}
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


 // Game is the Top most parent component.
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
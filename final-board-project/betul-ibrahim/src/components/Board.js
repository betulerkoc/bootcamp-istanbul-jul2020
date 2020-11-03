import React from 'react';
import { FormText } from 'react-bootstrap';

function Board(props) {

  return (
    <div className="card border-danger" style={{ width: '18rem' }}>
        {/* {console.log(props.data.myMenu)} */}
        {/* {console.log(props)} */}
        <div className="card-body">
          <h1>Menu</h1>
          <div>
            <h5>Breakfast</h5> {props.data.myMenu.breakfast.map(b =>  <span>{b.mealName}  {b.calories}</span>)}
            <h5>Lunch</h5> {props.data.myMenu.lunch.map(b =>  <span>{b.mealName}  {b.calories}</span>)} 
            {/* <div><h3>Snacks:</h3> <span> {props.data.myMenu.middleLunch.map(b =>  <span><br/> {b.mealName}, {b.calories} <br/></span>)}  </span> </div> */}
            <h5>Dinner</h5> {props.data.myMenu.dinner.map(b =>  <span> {b.mealName}  {b.calories}</span>)}  <br/>
            {/* <div><h3>Snacks:</h3> <span>{props.data.myMenu.middleDinner.map(b =>  <span><br/> {b.mealName}, {b.calories} <br/></span>)}  </span> </div> */}
          </div>
          <h6>Commitment: {props.data.commitment && props.data.commitment.commitment}</h6>
          <select className="form-control" name="commitment" onChange={props.handleCommitmentChange}>
                {[...Array(100)].map((e,i)=> <option value={i}>{i} %</option>)}
          </select><br/>
          <button className="btn btn-success">Update</button>
          <button className="btn btn-danger">Delete Menu</button><br/><br/>
          <h5>Total Calories: {}</h5>
        </div><br/>
    </div>
  );
}

export default Board;

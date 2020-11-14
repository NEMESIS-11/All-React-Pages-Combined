import React, { Component } from 'react';
import "../../font-awesome/css/font-awesome.min.css"
import "../../Css/task-page/MainBody.css"
import Buttons from "./Mainbody-TaskPage/Buttons.js"
import QuestionBox from "./Mainbody-TaskPage/QuestionBox.js"
import Questions from "../../data/Questions.js"


class TaskPage extends Component {
    constructor(){
        super();
        this.state = {
            QuestionHeading : "",
            QuestionText: ""
        };
      }
    render() {

this.state = Questions[0]

        return (
               <div className="main-body-taskpage">

                    <div class="total-flex">
                        <div class="space">


                            <QuestionBox QuestionHeading={this.state.QuestionHeading} QuestionText={this.state.QuestionText}/>
                            <Buttons/>



                        </div>
                    </div>

               </div>
         );
    }
}

export default TaskPage;

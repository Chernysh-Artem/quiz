import React from "react";

class Answer extends React.Component{
    render(){
        return(
            <div>
                {this.props.answerText}
            </div>
        )
    }
}

export default Answer;
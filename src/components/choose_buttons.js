import React, { Component } from "react";
import {Button, ButtonGroup} from 'react-bootstrap';

class ChooseButton extends Component {

    render(){
        return(
                <ButtonGroup>
                    <Button 
                        style={styles.button}
                        value={this.props.value}
                        onClick={this.props.onClick}
                        >
                            {this.props.text}
                      </Button>
                </ButtonGroup>
        );
    }
}
const styles={
            button:{
            margin:5
            }
  }
export default ChooseButton;

import React, { Component } from 'react';

import {Input, Form, Button,
        FormGroup, Label, FormFeedback, FormText
        } from 'reactstrap';
// Add Later: 

// const formSubmit = props => (e) => {
//     e.preventDefault();
//     console.log(`Text in form: ${e.target.searchBar.value}`);
// }



class SearchForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            formText: "",
            isValidText: true
        };

        this.formSubmit = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateData = this.validateData.bind(this);
    }

    formSubmit(e){
        e.preventDefault();
        
        // If query is valid, create magic
        if(this.validateData(this.state.formText)){
            //@TODO 
            //  -Use Music Service to refresh data
        }
    }

    handleChange(e){

        // Validate data while user types 
        if(!this.validateData(e.target.value)){
            // Not Valid data
            this.setState({isValidText: false});
        } else {
            this.setState({isValidText: true});            
        }

        this.setState({formText: e.target.value});
    }


    // Validates data. Used on change and on submit.
    // @TODO test for malic. input or ".,/;'[]=-+_|\"
    validateData(str){
        if(str.length > 150){
            return false;
        }

        return true;
    }

    render(){
        this.props.children        
        return(
            <div>
                <Form onSubmit={this.formSubmit}>
                    <FormGroup>
                        <Label for="searchBar">Sentence to Convert</Label>
                        <Input valid={this.state.isValidText} name="searchBar" placeholder="Place Holder Text To Search"
                            className="searchBar" value={this.state.formText} onChange={this.handleChange} autoComplete="off"/>
                        <FormFeedback valid={this.state.isValidText}>String is too long.</FormFeedback>
                        <FormText>Enter a sentence to convert to a Playlist.</FormText>
                        <br/>
                        <Button color="success">Create!</Button>
                    </FormGroup>
                    
                </Form>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}



export default SearchForm;
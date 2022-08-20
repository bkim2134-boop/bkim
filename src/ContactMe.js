import React, { Component } from 'react'
import { TextField, Button, Stack } from '@mui/material';
//you seem to have the inputs down, now we have to do input validation and theming
//you could try to use email js
export class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        if (event.target.id === "name") {
            this.setState({ name: event.target.value });
        }
        if (event.target.id === "email") {
            this.setState({ email: event.target.value });
        }
        if (event.target.id === "message") {
            this.setState({ message: event.target.value });
        }
    }

    handleSubmit(event) {
        //this will have to send a formatted email to me
        alert('A name was submitted: ' + this.state.name + 'An Email was submitted: ' + this.state.email + 'A Message was submitted' + this.state.message);
        event.preventDefault();
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <Stack spacing={2}>

                        <TextField type="text" id="name" label="Name" variant="outlined" value={this.state.name} onChange={this.handleChange} />
                        <TextField type="text" id="email" label="Email" variant="outlined" value={this.state.email} onChange={this.handleChange}/>
                        <TextField type="text" id="message" label="Message" variant="outlined" multiline={true} value={this.state.message} onChange={this.handleChange} />

                    </Stack>


                    <Button variant="contained" type="submit" > Submit </Button>
                </form>
            </div>
        )
    }
}

export default ContactMe
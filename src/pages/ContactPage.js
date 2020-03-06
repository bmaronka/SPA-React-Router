import React from 'react';
import { Prompt } from 'react-router-dom';

import '../styles/ContactPage.css';

class ContactPage extends React.Component {
    state = {
        value: '',
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            value: '',
        })
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to us</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder='Write something'></textarea>
                    <button>Send</button>
                </form>
                <Prompt when={this.state.value} message="You didn't fill the form. Are you sure you want to leave this page?" />
            </div>
        );
    }
}

export default ContactPage
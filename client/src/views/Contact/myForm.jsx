import React from "react";
import styles from './styles.module.css'
import { Typography, Grid, TextField } from "@material-ui/core/"
import { Alert, AlertTitle } from '@material-ui/lab'

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;

        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mjvpzwba"
                method="POST"
            >
                <Grid className={styles.label}>
                    <Typography>Your:</Typography>
                    <TextField type="email" name="email" placeholder="Email" className={styles.input} />
                </Grid>
                <Grid className={styles.message}>
                    <Typography>Your:</Typography>
                    <TextField type="text" name="message" placeholder="Message" className={styles.inputMessage} />
                </Grid>


                {status === "SUCCESS" ?
                    <Alert severity="success">
                        <AlertTitle>Thank You!</AlertTitle>
                Appreciate your feedback!
                </Alert> :
                    <button className={styles.button}>Send</button>}
                {status === "ERROR" &&
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                Ooops! There was an error.
                </Alert>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import axios from "../../axios_feedback";
class GetInTouch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackForm: {
                name: {
                    elementType: "input",
                    label: "Name*",
                    valid: false,
                    touched: false,
                    errorMessages: [],
                    validation: {
                        required: true,
                        minLength: 3
                    },
                    elementConfig: {
                        type: "text",
                        placeholder: " Enter your name"
                    }
                },
                email: {
                    elementType: "input",
                    label: "Email*",
                    valid: false,
                    touched: false,
                    errorMessages: [],
                    validation: {
                        required: true,
                        email: true
                    },
                    elementConfig: {
                        type: "text",
                        placeholder: "Email"
                    }
                },
                phone: {
                    elementType: "input",
                    label: "Phone Number",
                    valid: true,
                    touched: false,
                    errorMessages: [],
                    validation: {
                        numeric: true
                    },
                    elementConfig: {
                        type: "text",
                        placeholder: "Phone Number"
                    }
                },
                message: {
                    elementType: "text",
                    label: "Message",
                    valid: true,
                    touched: false,
                    errorMessages: [],
                    validation: {},
                    elementConfig: {
                        type: "text",
                        placeholder: "Message"
                    }
                }
            },
            feedback: null,
            isFormValid: false,
            loading: false
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let key in this.state.feedbackForm) {
            formData[key] = this.state.feedbackForm[key].elementConfig.value;
        }
        if (this.state.isFormValid) {
            axios
                .post("/feedback", formData)
                .then(response => {
                    console.log(response);
                    this.setState({ loading: false });
                })
                .catch(error => {
                    this.setState({ loading: false });
                    console.log(error);
                });
            this.setState({ feedback: true });
        }
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
            // console.log(value + "    " + value.length + "   " + isValid);
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
            // console.log(value + "    " + value.length + "   " + isValid);
        }

        if (rules.email) {
            isValid =
                value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && isValid;
        }

        if (rules.password) {
            isValid =
                value.match(/(?=.{7,13}$)(?=\w{7,13})(?=.*[A-Z])(?=.*\d)/) &&
                isValid;
        }

        if (rules.numeric) {
            isValid =
                value.match(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                ) && isValid;
        }
        return isValid;
    };
    inputChangeHandler = (event, id) => {
        event.preventDefault();
        // console.log(event.target.value);
        const updatedForm = {
            ...this.state.feedbackForm
        };
        const updatedElem = {
            ...updatedForm[id]
        };
        updatedElem.elementConfig.value = event.target.value;
        updatedElem.touched = true;
        updatedElem.valid = this.checkValidity(
            event.target.value,
            updatedElem.validation
        );

        updatedForm[id] = updatedElem;

        let isFormValid = true;
        for (let inputElem in updatedForm) {
            console.log(updatedForm[inputElem]);
            isFormValid = isFormValid && updatedForm[inputElem].valid;
        }
        this.setState({
            feedbackForm: updatedForm,
            isFormValid: isFormValid
        });
        console.log(isFormValid);
    };

    render() {
        let headerMessage = (
            <header className="display-4">
                <h2 className="display-3">Get Started!</h2>
                <p>
                    Please leave us a note and we will certainly get back to
                    you!
                </p>
            </header>
        );
        if (this.state.feedback) {
            headerMessage = (
                <div className="container ">
                    <h3 className="label-info  ">
                        Thanks for your feedback. We will contact you shortly.
                    </h3>
                </div>
            );
        }
        const formElementsArr = [];
        for (let key in this.state.feedbackForm) {
            formElementsArr.push({
                id: key,
                config: this.state.feedbackForm[key]
            });
        }

        let form = (
            <form>
                {formElementsArr.map(element => {
                    return (
                        <Input
                            type={element.config.elementType}
                            touched={element.config.touched}
                            invalid={!element.config.valid}
                            key={element.id}
                            label={element.config.label}
                            name={element.id}
                            shouldValidate={element.config.validation}
                            elementConfig={element.config.elementConfig}
                            changed={event =>
                                this.inputChangeHandler(event, element.id)
                            }
                        />
                    );
                })}
                <Button
                    clicked={this.handleSubmit}
                    disabled={!this.state.isFormValid}
                >
                    Send Feedback
                </Button>
            </form>
        );
        return (
            <section id="get_in_touch" className="section-content text-center">
                <div className="container">
                    {headerMessage}
                    <div className="container col-12">{form}</div>
                </div>
            </section>
        );
    }
}

export default GetInTouch;

import React, { Component } from "react";

// Components
import { FormInput } from "../form-input";
import { CustomButton } from "../custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { IUSer } from "../../models/user";

import "./sign-in.scss";

interface IProps {}

interface IState {
  user: IUSer;
}

export default class SignIn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = this.state.user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ user: { email: "", password: "" } });
    } catch (error) {
      console.error("Handle Submit sign in error: ", error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already hace an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.user.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.user.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

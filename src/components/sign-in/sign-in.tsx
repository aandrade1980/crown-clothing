import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import { selectSignInErrorMessage } from '../../redux/user/user.selectors';

// Components
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

import { IUSer } from '../../models/user';

import './sign-in.scss';
import { IRootState } from '../../redux/types';

interface IProps {
  googleSignInStart: () => void;
  emailSignInStart: (email: string, password: string) => void;
  errorMessage: string;
}

interface IState {
  user: IUSer;
}

class SignIn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state.user;

    emailSignInStart(email, password);
  };
  render() {
    const { googleSignInStart, errorMessage } = this.props;

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
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
          <div>
            <strong style={{ color: 'red', marginTop: 25, display: 'flex' }}>
              {errorMessage}
            </strong>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  errorMessage: selectSignInErrorMessage(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

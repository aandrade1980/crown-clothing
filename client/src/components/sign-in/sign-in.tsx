import React from 'react';

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

import { IRootState } from '../../redux/types';

import './sign-in.scss';

interface IProps {
  googleSignInStart: () => void;
  emailSignInStart: (email: string, password: string) => void;
  errorMessage: string;
}

const SignIn: React.FC<IProps> = ({
  emailSignInStart,
  googleSignInStart,
  errorMessage
}) => {
  const [user, setUser] = React.useState({ email: '', password: '' });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const { email, password } = user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  return (
    <div className="sign-in">
      <h2>I already hace an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
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
};

const mapStateToProps = (state: IRootState) => ({
  errorMessage: selectSignInErrorMessage(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

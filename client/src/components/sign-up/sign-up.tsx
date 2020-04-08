import React from 'react';

// Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signUpStart } from '../../redux/user/user.actions';

// Components
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

import { IUSer } from '../../models/user';

import './sign-up.scss';

const initialUserState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

interface ISignUp {
  signUpStart: (userCredentials: IUSer) => void;
}

function SignUp({ signUpStart }: ISignUp) {
  const [user, setUser] = React.useState(initialUserState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={user.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpStart: (userCredentials: IUSer) =>
    dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);

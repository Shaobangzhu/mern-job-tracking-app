import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name='firstName' labelText='first name' defaultValue='clu' />
        <FormRow type="text" name='lastName' labelText='last name' defaultValue='extron' />
        <FormRow type="text" name='location' defaultValue='California' />
        <FormRow type="email" name='email' defaultValue='clu@outlook.com' />
        <FormRow type="password" name='password' defaultValue='secret123' />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

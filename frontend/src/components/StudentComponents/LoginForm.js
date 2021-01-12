import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "../../Auth/use-auth";
import "./LoginForm.scss";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  let history = useHistory();
  let auth = useAuth();

  const onSubmit = (data) => {
    auth.signin(data.email, data.password, () => {
      if(data.email==="aaa@gmail.com"){
        history.replace({pathname:"/mentor_main"})
      }else{
      history.replace({ pathname: "/student_main" });
    }});
  };

  return (
    <div className="emailPwDiv">
      <div className="wrapper-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formEmail" className="login-form-group">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              ref={register({
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Your email is not valid",
                },
              })}
            />
            {errors.email && (
              <Form.Text className="text-white">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formPassword" className="login-form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <Form.Text className="text-white">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="btn-lg rounded-lg text-dark loginButton"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

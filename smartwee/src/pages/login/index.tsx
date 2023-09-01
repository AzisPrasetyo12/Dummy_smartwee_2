import { AuthPage, ThemedTitleV2 } from "@refinedev/chakra-ui";
import { AppIcon } from "../../components/app-icon";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthPage
      type="login"
      title={
        <ThemedTitleV2
          collapsed={false}
          text="SmartWee"
          icon={<AppIcon />}
        />
      }
      formProps={{
        defaultValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
    />
  );
};

export default Login;

import { AuthPage, ThemedTitleV2 } from "@refinedev/chakra-ui";
import { AppIcon } from "../../components/app-icon";

const Register = () => {
  return (
    <AuthPage
      type="register"
      title={
        <ThemedTitleV2
          collapsed={false}
          text=""
          icon={<AppIcon />}
        />
      }
    />
  );
};

export default Register;

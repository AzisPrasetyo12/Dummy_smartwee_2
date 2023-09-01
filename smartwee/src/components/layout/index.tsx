
import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/chakra-ui";
// import { FloatButton } from 'antd';
// import { FaChevronUp } from "react-icons/fa6";
import { Header } from "@/components/header";
import { AppIcon } from "@/components/app-icon";

export const Layout: React.FC<any> = ({
  children
}) => {
  return (
    <ThemedLayoutV2
      Sider={() => <></>}
      Header={() => <Header sticky />}
      // Footer={() => <footer>FOOTER NIH</footer>}
      Title={({ collapsed }) => (
        <ThemedTitleV2
          collapsed={collapsed}
          text={import.meta.env.VITE_APP_NAME}
          icon={<AppIcon />}
        />
      )}
    >
      {children}

      {/* <FloatButton.BackTop
        tooltip="Back to top"
        type="primary"
        visibilityHeight={90}
        icon={<FaChevronUp />}
        className="-mb-8 -mr-2"
      /> */}
    </ThemedLayoutV2>
  )
}

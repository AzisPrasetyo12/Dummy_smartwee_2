import { useEffect } from "react";
import { Refine } from "@refinedev/core"; // GitHubBanner
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider } from "@refinedev/chakra-ui"; // RefineThemes
import { ChakraProvider, extendTheme, theme as baseTheme } from "@chakra-ui/react";
import routerBindings, { DocumentTitleHandler, UnsavedChangesNotifier } from "@refinedev/react-router-v6"; // CatchAllNavigate,
import dataProvider from "@refinedev/simple-rest";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { authProvider } from "./authProvider";
import { resources, AppRoutes } from "@/components/routes";

import { theme as proTheme } from '@chakra-ui/pro-theme'; //29082023

console.log('baseTheme: ', baseTheme)

export const THEME = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.green },
  },
  proTheme,
)

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  useEffect(() => {
    // Hide loading Splash Screen
    const splashScreen = document.getElementById('_splashScreen');
    if(splashScreen){
      splashScreen.hidden = true;
    }
    // document.getElementById('_splashScreen')?.classList.add('hidden');
  }, []);

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
        <ChakraProvider 
          // theme={RefineThemes.Blue}
          theme={THEME}
        >
          <Refine
            dataProvider={dataProvider(import.meta.env.VITE_BASE_API)}
            notificationProvider={notificationProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            routerProvider={routerBindings}
            resources={resources}
            options={{
              disableTelemetry: true,
              syncWithLocation: true,
              // warnWhenUnsavedChanges: true,
              // projectId: "g5oPnw-weRx17-FwkV6w",
            }}
          >
            <AppRoutes />

            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ChakraProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;

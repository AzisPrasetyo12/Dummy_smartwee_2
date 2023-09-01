import { lazy, Suspense } from 'react'; // , useState
// import loadable from '@loadable/component';
import { Routes, Route, Outlet } from "react-router-dom";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/react-router-v6"; // CatchAllNavigate, 
import { ErrorComponent } from "@refinedev/chakra-ui";
import { Stack, Skeleton } from '@chakra-ui/react'; // , SkeletonCircle, SkeletonText
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SplashScreen } from '@/components/SplashScreen';
import { Layout } from '@/components/layout';
import App from '@/App';
import { logintest } from '@/pages/logintest/App';
import { forgetpassword } from '@/pages/forget_password/App';
import { forgetpasswordemail } from '@/pages/forget_password_email/App';
import { setnewpassword } from '@/pages/set_new_password/App';
import { setnewpassworddone } from '@/pages/set_new_password_done/App';
import PricingArea from '@/pages/landing_page/PricingArea';
 
// DEMO Refine:
// import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "@/pages/blog-posts";
// import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "@/pages/categories";

// Pages:
const LandingPage = lazy(() => import('@/pages/landing_page/landingPage'));
const Home = lazy(() => import('@/pages/home'));
const Registrasi = lazy(() => import('@/pages/registrasi/registrasi1'));
const Registrasi2 = lazy(() => import('@/pages/registrasi/registrasi2'));
const Registrasi3 = lazy(() => import('@/pages/registrasi/registrasi3'));
const Registrasi4 = lazy(() => import('@/pages/registrasi/registrasi4'));
const Registrasi5 = lazy(() => import('@/pages/registrasi/registrasi5'));
const Profile = lazy(() => import('@/pages/profile/profile'));

const Login = lazy(() => import('@/pages/login'));
// const Register = lazy(() => import('@/pages/register'));
// const ForgotPassword = lazy(() => import('@/pages/forgotpassword'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        // element={
        //   <Authenticated
        //     appendCurrentPathToQuery={false}
        //     loading={" "}
        //     fallback={<CatchAllNavigate to="/login" />}
        //   >
        //     <Layout>
        //       <Outlet />
        //     </Layout>
        //   </Authenticated>
        // }
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {/* <Route
          index
          element={<NavigateToResource resource="dashboard" />}
        /> */}

        <Route index element={dynamicRoute(LandingPage)} />

        {/* <Route path="/">
          <Route
            index
            element={<LandingPage />}
          />
        </Route> */}
        <Route path="/landing-page" element={dynamicRoute(LandingPage)}/>
        <Route path="/login" element={dynamicRoute(Login)} />
        <Route path="/home" element={dynamicRoute(Home)} />
        <Route path="/registrasi" element={dynamicRoute(Registrasi)} />
        <Route path="/registrasi2" element={dynamicRoute(Registrasi2)} />
        <Route path="/registrasi3" element={dynamicRoute(Registrasi3)} />
        <Route path="/registrasi4" element={dynamicRoute(Registrasi4)} />
        <Route path="/registrasi5" element={dynamicRoute(Registrasi5)} />
        <Route path="/profile" element={dynamicRoute(Profile)} />
        <Route path="/forget-password" element={dynamicRoute(forgetpassword)} />
        <Route path="/forget-password-email" element={dynamicRoute(forgetpasswordemail)} />
        <Route path="/set-new-password" element={dynamicRoute(setnewpassword)} />
        <Route path="/set-new-password-done" element={dynamicRoute(setnewpassworddone)} />
        <Route path="/login-test" element={dynamicRoute(logintest)} />
       <Route path="/pricing-area" element={dynamicRoute(PricingArea)} />

        {/* DEMO Refine */}
        {/* <Route path="/blog-posts">
          <Route index element={<BlogPostList />} />
          <Route path="create" element={<BlogPostCreate />} />
          <Route path="edit/:id" element={<BlogPostEdit />} />
          <Route path="show/:id" element={<BlogPostShow />} />
        </Route> */}
        {/* <Route path="/categories">
          <Route index element={<CategoryList />} />
          <Route path="create" element={<CategoryCreate />} />
          <Route path="edit/:id" element={<CategoryEdit />} />
          <Route path="show/:id" element={<CategoryShow />} />
        </Route> */}

        <Route path="*" element={<ErrorComponent />} />
      </Route>

      <Route
        element={
          <section style={{ backgroundColor: 'pink' }}>
            <Outlet />
          </section>
        }
      >
        <Route path="/try-pink" element={<h1>Coba layout pink</h1>} />
      </Route>
      
      <Route
        element={
          <Authenticated fallback={<Outlet />}>
            <NavigateToResource />
          </Authenticated>
        }
      >
        <Route path="/login" element={dynamicRoute(Login, <SplashScreen />)} />
        {/* <Route path="/register" element={dynamicRoute(Register, <SplashScreen />)} /> */}
        {/* <Route path="/forgot-password" element={dynamicRoute(ForgotPassword, <SplashScreen />)} /> */}
        <Route path="*" element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
}

const dynamicRoute = (Element: any, loading?: any) => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={loading || (
          <Stack>
            {[1, 2, 3].map((v: any, idx: number) => <Skeleton key={idx} height='20px' />)}
          </Stack>
        )}
      >
        <Element />
      </Suspense>
    </ErrorBoundary>
  )
}

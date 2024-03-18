import React, { ReactElement, ReactNode, useContext, useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import Link from "next/link";
import BaseInput, { PasswordInput } from "@/components/Base";
import Image from "next/image";
import auth from "config/auth";
import { errorMessage, successMessage } from "utils/tostMsg";
import { useRouter } from "next/router";
import axios from "axios";
import AppContext from "context/AppContext";
import storeUserData from "../utils/storeUserData";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
const initialFormData = Object.freeze({});

const SignUp = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const value = useContext(AppContext);
  const router = useRouter();

  const signIn = router.locale === `fr` ? `S'identifier` : `Sign in`;
  const handleForm = async (e: any) => {
    const { email, password }: any = formData;
    e.preventDefault();
    setLoading(true);
    if (email && password) {
      try {
        let res: any = await toast.promise(
          auth.loginWithEmailPassword(email, password),
          {
            pending: "Please wait....",
            success: "Login successfully!",
            error: "Something went wrong 🤯",
          }
        );
        // let res = await auth.loginWithEmailPassword(email, password);

        const data: any = await storeUserData(res?.refreshtoken);
        value.setToken(data.token);
        value.setUser(data.user);
        value.setIsLoggedIn(true);
        // successMessage(res.msg);

        router.push(`/${data.user._id}/dashboard`);
      } catch (err: any) {
        console.log(err);
        setLoading(false);
        errorMessage(err?.response?.data?.msg);
      }
    } else {
      errorMessage("blank field not allowed");
      setLoading(false);
    }
  };
  const onchange = (e: any) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  const responseFacebook = async (response: any) => {
    try {
      let res: any = await toast.promise(
        axios.post(`/api/facebookLogin`, response),
        {
          pending: "Please wait....",
          success: "Login successfully!",
          error: "Something went wrong 🤯",
        }
      );
      // const res: any = await axios.post(`/api/facebookLogin`, response);
      localStorage.setItem("firstLogin", "true");
      document.cookie = `refreshtoken=${res.data.refreshtoken}`;
      // successMessage(res.data.msg);
      const data: any = await storeUserData(res.data.refreshtoken);
      value.setToken(data.token);
      value.setUser(data.user);
      value.setIsLoggedIn(true);

      router.push(`/${data.user._id}/dashboard`);
    } catch (error: any) {}
  };

  const responseGoogle = async (response: any) => {
    try {
      let res: any = await toast.promise(
        axios.post(`/api/loginWithGoogle`, response),
        {
          pending: "Please wait....",
          success: "Login successfully!",
          error: "Something went wrong 🤯",
        }
      );
      // const res: any = await axios.post(`/api/loginWithGoogle`, response);

      localStorage.setItem("firstLogin", "true");
      document.cookie = `refreshtoken=${res.data.refreshtoken}`;
      // successMessage(res.data.msg);
      const data: any = await storeUserData(res.data.refreshtoken);
      value.setToken(data.token);
      value.setUser(data.user);
      value.setIsLoggedIn(true);

      router.push(`/${data.user._id}/dashboard`);
    } catch (error: any) {}
  };
  return (
    <>
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[16px] text-white-primary 
       md:h-8 md:w-8 md:text-[18px]
       lg:h-11 lg:w-11 lg:text-[22px] 
       2xl:h-[60px] 2xl:w-[60px] 2xl:text-[27px] "
      >
        <i className="fa-solid fa-quote-left" />
      </div>
      <h5
        className="pt-[18px] text-[14px] font-semibold leading-6
       md:text-[15px] md:leading-7
       lg:text-[20px] lg:leading-[30px]
       xl:text-2xl xl:leading-[40px]
       2xl:text-[28px] 2xl:leading-[48px]"
      >
        {router.locale === `fr`
          ? `Merci de votre confiance et de votre intérêt à faire affaire avec nous. Nous sommes impatients de vous fournir `
          : "Thank you for your trust and interest in doing business with us. We are looking forward to providing you with "}
        <Link href="/">
          <a className="text-primary">
            {router.locale === `fr`
              ? ` avions de qualité `
              : ` quality planes `}
          </a>
        </Link>
        {router.locale === `fr` ? ` et ` : ` and `}
        <Link href="/">
          <a className="text-primary">
            {router.locale === `fr`
              ? `meilleures prestations.`
              : ` best services.`}
          </a>
        </Link>
      </h5>{" "}
      <Link href="/sign-up">
        <a
          className="btn-secondary my-[40px] mx-auto flex flex-row items-center justify-center border py-3 text-[12px] 
          md:w-full md:text-[13px] 
          lg:py-4 lg:text-[14px] 
          2xl:py-5 3xl:w-[579px] "
        >
          {router.locale === `fr`
            ? `Continuer en tant qu'invité`
            : `Continue as a Guest`}
        </a>
      </Link>
      <div className=" flex w-full flex-row items-center justify-between px-[22px] ">
        <span className="h-px bg-gray/40 md:w-[80px] lg:w-[140px] xl:w-[180px] 2xl:w-[200px] 3xl:w-[240px] " />
        <p className="text-[12px] capitalize md:text-[13px] lg:text-sm ">
          {router.locale === `fr` ? `ou alors` : `Or`}
        </p>
        <span className="h-px bg-gray/40 md:w-[80px] lg:w-[140px] xl:w-[180px] 2xl:w-[200px] 3xl:w-[240px] " />
      </div>
      <form
        className="my-5 flex w-full flex-col items-start justify-start gap-4 lg:px-5 xl:px-9"
        method="post"
        onSubmit={handleForm}
      >
        <BaseInput
          inputType="email"
          identifier="email"
          label={router.locale === `fr` ? `Votre e-mail` : `Your Email`}
          groupClass="pb-[10px]"
          onchange={(e) => onchange(e)}
        />
        <PasswordInput
          showPassword={true}
          identifier="password"
          label={router.locale === `fr` ? `le mot de passe` : `password`}
          onchange={(e) => onchange(e)}
        />
        <div className=" flex w-full justify-between">
          <div className="flex flex-row items-center gap-[10px]">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className=" rounded-[10px] text-primary !ring-transparent checked:bg-primary lg:h-6 lg:w-6 xl:h-[30px] xl:w-[30px]"
            />
            <label
              className="text-[12px] font-normal text-black-secondary md:text-[12px] lg:text-[15px] xl:text-[16px] 2xl:text-lg"
              htmlFor="remember"
            >
              {router.locale === `fr`
                ? ` Souviens-toi de moi `
                : ` Remember me `}
            </label>
          </div>
          <Link href="/">
            <a className=" text-[12px] font-normal capitalize text-[#84878B] md:text-[12px] lg:text-[15px] xl:text-[16px] 2xl:text-lg ">
              {router.locale === `fr`
                ? ` mot de passe oublié? `
                : ` forgot password? `}
            </a>
          </Link>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary my-5 flex w-full items-center justify-center py-2.5 text-[12px] disabled:cursor-not-allowed disabled:border-[#20436d] disabled:bg-[#20436d] 
           md:py-3 md:text-[13px] 
           lg:py-3.5 lg:text-[16px] 
           xl:py-4 xl:text-[18px] 
           2xl:py-5 2xl:text-[20px] "
        >
          {loading ? <Spinner /> : signIn}
        </button>
      </form>
      <div className=" flex w-full flex-row items-center justify-between lg:px-5 xl:px-9 ">
        <span className="h-px bg-gray/40 md:w-12 lg:w-[90px] xl:w-[120px] 2xl:w-[130px] 3xl:w-[176px] " />
        <p className="text-sm capitalize text-gray ">
          {router.locale === `fr` ? `connexion instantanée` : `instant login`}
        </p>
        <span className="h-px bg-gray/40 md:w-12 lg:w-[90px] xl:w-[120px] 2xl:w-[130px] 3xl:w-[176px] " />
      </div>
      <div
        className=" my-5 flex w-full flex-col  gap-2 
        md:flex-row md:justify-evenly 
        lg:my-7 xl:my-10 xl:justify-around 
        xl:px-5 3xl:justify-between 3xl:px-9 "
      >
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID || ""}
          onSuccess={responseGoogle}
          cookiePolicy={"single_host_origin"}
          prompt="select_account"
          render={(renderProps: any) => (
            <button
              className=" flex flex-row items-center justify-center rounded-[30px] border border-gray/40 px-3 py-1.5 capitalize lg:py-[10px] lg:px-5 xl:px-6 2xl:px-4 "
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <div className=" relative mr-3 h-10 w-10 ">
                <Image
                  src="/Google.svg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[12px] font-semibold md:text-[13px] lg:text-sm xl:block 2xl:hidden ">
                google
              </p>
              <p className="hidden text-sm font-semibold 2xl:block ">
                {router.locale === `fr`
                  ? `se connecter avec google`
                  : `sign in with google`}
              </p>
            </button>
          )}
        />
        <FacebookLogin
          appId={process.env.FACEBOOK_APP_ID || ""}
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps: any) => (
            <button
              onClick={renderProps.onClick}
              className=" flex flex-row items-center justify-center rounded-[30px] border border-gray/40 px-3 py-1.5 capitalize lg:py-[10px] lg:px-5 xl:px-6 2xl:px-4 "
            >
              <div className=" relative mr-3 h-10 w-10 ">
                <Image
                  src="/Facebook.svg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[12px] font-semibold md:text-[13px] lg:text-sm xl:block 2xl:hidden ">
                facebook
              </p>
              <p className="hidden text-sm font-semibold 2xl:block ">
                {router.locale === `fr`
                  ? `Connectez-vous avec Facebook`
                  : `sign in with facebook`}
              </p>
            </button>
          )}
        />
      </div>
      <div className="flex w-full items-center justify-center py-3 text-[12px] md:text-[13px] lg:py-4 lg:text-[15px] xl:text-[16px] 2xl:py-5 2xl:text-lg ">
        <p className=" font-normal text-gray ">
          {router.locale === `fr`
            ? `Vous n'avez pas de compte?`
            : `Don’t have any account?`}
        </p>
        <Link href="/sign-up">
          <a className="pl-1 capitalize text-primary ">
            {router.locale === `fr` ? `S'inscrire` : `Sign Up`}
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignUp;

SignUp.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return <AuthLayout>{page}</AuthLayout>;
};

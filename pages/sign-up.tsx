import React, { ReactElement, ReactNode, useContext, useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import Link from "next/link";
import Image from "next/image";
import BaseInput, { PasswordInput } from "@/components/Base";
import { useRouter } from "next/router";
import auth from "../config/auth";
import axios from "axios";

import { successMessage } from "../utils/tostMsg";
import FormValidator from "@/components/validation/FormValidator";
import AppContext from "context/AppContext";
import storeUserData from "utils/storeUserData";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

const initialFormData = Object.freeze({});
// const initialFormData = {};

const SignIn = () => {
  const [formData, updateFormData] = React.useState(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError]: any = useState();

  const value = useContext(AppContext);

  const router = useRouter();

  const signUp = router.locale === `fr` ? `S'inscrire` : `Sign Up`;
  const newUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/sign-up", formData);
      console.log("🚀 ~ file: sign-up.tsx:61 ~ newUser ~ res.data.error:", res);

      setError(res.data.error);
      if (res.data.status) {
        let { email, password }: any = formData;
        let response: any = await toast.promise(
          auth.loginWithEmailPassword(email, password),
          {
            pending: "Please wait....",
            success: "User Login successfully!",
            error: "Something went wrong 🤯",
          }
        );
        // let response = await auth.loginWithEmailPassword(email, password);
        // successMessage(response.msg);
        const data: any = await storeUserData(response.refreshtoken);
        value.setToken(data.token);
        value.setUser(data.user);
        value.setIsLoggedIn(true);

        router.push(`/${data.user._id}/dashboard`);
      }
    } catch (error: any) {
      console.log(
        "🚀 ~ file: sign-up.tsx:60 ~ newUser ~ error:",
        error?.response?.data?.errMsg.error
      );
      setError(error?.response?.data?.errMsg.error);
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
      <div className="flex w-full flex-col items-start justify-start xl:px-5 2xl:px-9">
        <h5 className="text-[16px] font-semibold leading-[150%] md:text-[20px]  lg:text-[28px] xl:text-[30px] 2xl:text-[35px]">
          {router.locale === `fr` ? `S'inscrire` : `Sign Up`}
        </h5>
        <p className=" text-[12px] font-normal text-gray md:text-[13px] lg:text-[15px] xl:text-[18px] ">
          {router.locale === `fr`
            ? `Entrez vos coordonnées pour enregistrer votre compte.`
            : `Enter your details to register your account.`}
        </p>
      </div>
      <form
        className=" mt-7 flex w-full flex-col items-start justify-start gap-6 lg:mb-3 xl:mb-5 xl:px-5 2xl:px-9"
        // method='post'
        onSubmit={newUser}
      >
        <BaseInput
          inputType="text"
          identifier="firstName"
          label={router.locale === `fr` ? `Prénom` : `First Name`}
          placeholder={
            router.locale === "fr"
              ? `Entrez votre Prénom`
              : `Enter Your First Name`
          }
          onchange={(e) => onchange(e)}
        />
        <FormValidator message={error?.firstName} />
        <BaseInput
          inputType="text"
          identifier="lastName"
          label={router.locale === `fr` ? `Nom de famille` : `Last Name`}
          onchange={(e) => onchange(e)}
        />
        <FormValidator message={error?.lastName} />
        <BaseInput
          inputType="text"
          identifier="organizationName"
          label={router.locale === `fr` ? `organisme` : `organization`}
          onchange={(e) => onchange(e)}
        />
        <FormValidator message={error?.organizationName} />
        <BaseInput
          inputType="email"
          identifier="email"
          label={router.locale === `fr` ? `e-mail` : `mail`}
          onchange={(e) => onchange(e)}
        />
        <FormValidator message={error?.email} />
        <PasswordInput
          showPassword={true}
          identifier="password"
          label={router.locale === `fr` ? `le mot de passe` : `password`}
          onchange={(e) => onchange(e)}
        />
        <FormValidator message={error?.password} />
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
              {router.locale === `fr` ? `Souviens-toi de moi` : `Remember me`}
            </label>
          </div>
          <Link href="/">
            <a className=" text-[12px] font-normal capitalize text-[#84878B] md:text-[12px] lg:text-[15px] xl:text-[16px] 2xl:text-lg">
              {router.locale === `fr`
                ? `mot de passe oublié?`
                : `forgot password?`}
            </a>
          </Link>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary my-5 flex w-full items-center justify-center py-2.5 text-[12px] disabled:border-[#20436d] disabled:bg-[#20436d] 
           md:py-3 md:text-[13px] 
           lg:py-3.5 lg:text-[16px] 
           xl:py-4 xl:text-[18px] 
           2xl:py-5 2xl:text-[20px]"
          // onClick={newUser}
        >
          {loading ? <Spinner /> : signUp}
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
              {" "}
              <div className=" relative mr-3 h-10 w-10 ">
                <Image
                  src="/Facebook.svg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[12px] font-semibold md:text-[13px] lg:text-sm xl:block 2xl:hidden  ">
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
        <Link href="/sign-in">
          <a className="pl-1 capitalize text-primary">
            {router.locale === `fr` ? `S'identifier` : `Sign in`}
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignIn;

SignIn.defineLayout = (page: ReactElement): ReactNode => {
  return <AuthLayout>{page}</AuthLayout>;
};

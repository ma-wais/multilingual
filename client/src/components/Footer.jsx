import React from "react";

import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <h1 className="text-white text-3xl font-bold">NWCO'33</h1>
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">{t('footer.market')}</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">{t('footer.exchange')}</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">{t('footer.tutorials')}</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">{t('footer.wallets')}</p>
        </div>

      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">{t('footer.joinUs')}</p>
        <p className="text-white text-sm text-center font-medium mt-2">{t('footer.email')}</p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">{t('footer.copyright')}</p>
        <p className="text-white text-right text-xs">{t('footer.allRightsReserved')}</p>
      </div>
    </div>
)}

export default Footer;
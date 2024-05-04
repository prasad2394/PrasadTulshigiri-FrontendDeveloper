import React from 'react';
//import FooterLogo from '../../public/assets/swiggy_logo_footer.png';

const Footer = () => {
    return (
      <>
          <footer className="mx-auto mt-16 bg-black w-full max-w-container px-4 sm:px-6 lg:px-8">
                <div className="container  px-5 mx-auto flex items-center justify-between">
                    <div className="border-t border-slate-900/5 pt-10">
                        <img src="/assets/swiggy_logo_footer.png" className="h-14" alt="footer-logo"/>
                        <p className="mt-5 text-left text-sm leading-6 text-slate-500">
                            ©2024 Designed and Developed by Prasad Tulshigiri. | BSF Test.
                        </p>
                        <div className="mt-4 mb-10 flex items-start space-x-4 text-sm font-semibold leading-6 text-slate-700">
                            <p>Terms & Condition</p>
                            <div className="h-4 w-px bg-slate-500/20"></div>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
          </footer>
      </>
    )
  }
  
  export default Footer
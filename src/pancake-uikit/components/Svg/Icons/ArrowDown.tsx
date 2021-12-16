import React from "react";
import SvgFillNone from "../SvgFillNone";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgFillNone width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#E0E5ED"/>
      <path d="M31.2852 18.353L28.4982 22.503L25.2932 18.665" stroke="#418FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.71503 22.6549L11.5 18.5029L14.707 22.3419" stroke="#418FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5356 18.54C10.8342 22.985 13.6692 27.2218 18.0456 28.269C20.8959 28.9451 23.8934 28.1045 25.9766 26.045" stroke="#418FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.495 22.4792C29.0667 20.1855 28.6974 17.7585 27.4693 15.7387C26.2412 13.7189 24.2564 12.2741 21.957 11.7262C18.9074 11.0035 15.7076 12.0191 13.633 14.3682" stroke="#418FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgFillNone>

);
};

export default Icon;

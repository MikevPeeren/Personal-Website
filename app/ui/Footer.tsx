import Image from "next/image";

import { CenteredLayout } from "@/components/CenteredLayout";

import FooterLinks from "./FooterLinks";
import NextLink from "./NextLink";

import GithubIcon from "@/app/ui/icons/GithubIcon";
import HomeIcon from "@/app/ui/icons/HomeIcon";
import LinkedInIcon from "@/app/ui/icons/LinkedInIcon";
import MediumIcon from "@/app/ui/icons/MediumIcon";
import Logo from "@/public/logo.png";

const Footer = () => {
  return (
    <CenteredLayout marginTop={false}>
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              className="rounded-full"
              sizes="100vw"
              style={{
                width: "auto",
                height: "50px",
              }}
              title={""}
              alt={""}
            />
          </div>
          <div className="flex items-center gap-0 md:gap-12 text-white">
            <NextLink
              redirectHref="/"
              redirectTarget="_self"
              variant="tertiary"
              ariaLabel="redirect to the home page"
              icon={<HomeIcon />}
            />
            <NextLink
              redirectHref="https://www.linkedin.com/in/mikevpeeren/"
              redirectTarget="_blank"
              variant="tertiary"
              ariaLabel="redirect to my personal LinkedIn"
              icon={<LinkedInIcon />}
            />
            <NextLink
              redirectHref="https://medium.com/@mikevpeeren/"
              redirectTarget="_blank"
              variant="tertiary"
              ariaLabel="redirect to my personal Medium"
              icon={<MediumIcon additionalClassNames="fill-white" />}
            />
            <NextLink
              redirectHref="https://github.com/MikevPeeren"
              redirectTarget="_blank"
              variant="tertiary"
              ariaLabel="redirect to my personal Github"
              icon={<GithubIcon />}
            />
          </div>
        </div>
        <hr className="border-[#FFFFFF]/50 w-full" />
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 text-center md:text-left justify-between w-full">
          <span className="text-[#FFFFFF]/60 text-5xl md:text-7xl max-w-sm leading tracking-wider">
            Mike van Peeren
          </span>
          <FooterLinks />
        </div>
      </div>
    </CenteredLayout>
  );
};

export default Footer;

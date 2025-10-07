import { FooterProps } from "./footerProps";

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="w-full flex items-center justify-center px-[20px] py-[15px] bg-white border-t-[1px] border-t-zinc-200 shadow-xs">
      <p className="text-[14px] font-headline">{text}</p>
    </footer>
  );
};

export default Footer;

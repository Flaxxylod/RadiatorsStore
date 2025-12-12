import "./logo.css"
import Logotype from "./../../../assets/Icons/logo.svg"
const Logo = () => {
    return (
        <div className="lg:grid lg:grid-cols-[15.8125rem_12.9375rem] w-full  lg:max-w-[30.687rem] lg:gap-x-[0.9375rem]  
        items-center">
            <div className="flex   uppercase w-full lg:gap-x-[0.9375rem] gap-x-[0.425rem]">
                <img className=" w-full lg:max-w-[4.375rem] lg:max-h-[3.3125rem]  max-w-[2rem]" src={Logotype} loading="lazy" alt="" />
                <div className="flex flex-col justify-end">
                    <strong className="lg:text-[1.4375rem] text-[0.6875rem] ">
                        <span className=" whitespace-nowrap">
                            STOPRADIATORS
                        </span>
                    </strong>
                    <span className="lg:text-[0.875rem] text-[0.425rem] w-full text-justify break-words leading-snug font-[Roboto] text-[var(--grayWhite-color)] whitespace-nowrap tracking-[-0.01rem]">все инженерные сети</span>
                </div>

            </div>
            <div className="hidden lg:block relative after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[3.5rem] after:bg-[#798797] pl-[1rem] text-[0.9375rem] w-full ">

                <div className="lg:flex flex-col whitespace-nowrap mt-[0.625rem]">
                    <strong className="">МОНТАЖ ИНЖЕНЕРНЫХ СИСТЕМ</strong>
                    <span>И ПРОДАЖА ОБОРУДОВАНИЯ</span>
                </div>
            </div>
        </div>
    );
}

export default Logo;
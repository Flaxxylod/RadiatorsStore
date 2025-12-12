import mapPoint from "./../../assets/Icons/MapPointsvg.svg"
import BurgerMenu from "./../BurgerMenu.svg"
import Support from "./../Support.svg"
import Logo from "./Logo/Logo"
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Mail from "./../../assets/Icons/Mail.svg"
import "./nav.css"

const Nav = () => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, pagename: string) => {
        e.preventDefault()
        alert(`"Страница - ${pagename} в разработке "`)
    }

    return (
        <section className="Nav-content py-[2.1875rem] ">
            <div className="container ">
                {/* Заменяем общий грид на две отдельные строки с разными gap */}
                <div className="w-full">
                    {/* Первая строка с gap 23px */}
                    <div className="first-row hidden lg:grid justify-between grid-cols-[41.875rem_18.75rem]  pr-[97px]">
                        <div className="flex w-full max-h-[36px]">
                            <nav className="col-start-1 w-[41.85rem] nav-links items-center gap-x-[clamp(3.125rem,3.125vw,3.75rem)] font-bold text-nowrap text-[0.9375rem] pl-[5.125rem] ">
                                <Link to={"/"}>
                                    Расчет
                                </Link>
                                <Link to={"/StageMontage"} onClick={(e) => handleClick(e, "Этапы монтажа")}>
                                    Этапы монтажа
                                </Link>

                                <Link to={"/ByWorks"} onClick={(e) => handleClick(e, " Примеры работ")}>
                                    Примеры работ
                                </Link>

                                <Link to={"/resolve"} onClick={(e) => handleClick(e, "Вопрос-Ответ")}>
                                    Вопрос-Ответ
                                </Link>

                                <Link to={"Contacts"} onClick={(e) => handleClick(e, "Контакты")}>
                                    Контакты
                                </Link>
                            </nav>
                        </div>

                        <div className="flex w-full max-w-[18.75rem] gap-x-[0.875rem] ml-[25px]">
                            <img className="max-h-[1.25rem]" src={mapPoint} alt="mapPoint" />
                            <span className="text-[0.8125rem]">г. Санкт-Петербург, Выборгское шоссе, д.212, строение 8</span>
                        </div>
                    </div>

                    {/* Вторая строка с gap 46px */}
                    
                    <div className="second-row hidden lg:grid grid-cols-[31.687rem_auto] justify-between ">
                        <div className="col-start-1 flex max-w-[30.687rem]">
                            <Logo />
                        </div>

                        <div className="col-start-2 grid grid-cols-[255px_200px] w-full max-w[31.6875rem]  gap-x-[1.875rem] mr-[40px]">
                            <div className="flex items-center max-w-[15.9375rem]">
                                <div className="mr-[0.625rem]">
                                    <img src={Support} alt="" />
                                </div>

                                <ul className="leading-[1.538] text-[0.8125rem] whitespace-nowrap mr-[1.25rem]">
                                    <li>8 (812) 245-23-46</li>
                                    <li>8 (812) 438-32-58</li>
                                </ul>

                                <Button>
                                    ЗАКАЗАТЬ ЗВОНОК
                                </Button>
                            </div>

                            <div className="flex items-center max-w-[10.625rem] font-['Roboto'] gap-x-[0.625rem]">
                                <div><img src={Mail} alt="" /></div>
                                <div className="flex flex-col max-w-[8.625rem] leading-snug">
                                    <span>Пн-Пт 9:00-19:00</span>
                                    <span><a href="mailto:info@stopradiators.ru">info@stopradiators.ru</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Адаптив под мобильные устройства */}
                    <div className="burger lg:hidden">
                        <div className="flex w-full gap-x-[20px]">
                            <img src={BurgerMenu} alt="" />
                            <Logo />
                        </div>

                        <div>
                            <img src={Support} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nav;
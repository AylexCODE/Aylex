import style from './menuStyle.module.css';

export default function BurgerMenu(props){
    return (
        <>
        <svg className={(props.state ? style.activeMenu : "menu") + " stroke-textColor"} width="100%" height="100%" viewBox="0 0 65 48" fill="none" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10">
            <path className={style.line1} d="M3.0,3.0C3.0,3.0,74.15,3.0,60.18,3.0C60.18,3.0,51.06,3.0,51.06,3.0C51.06,3.0,32.42,23.98,32.42,23.98C32.42,23.98,51.09,44.92,51.09,44.92" />
            <path className={style.line2} d="M4.01,24.03C4.01,24.03,60.99,24.17,60.99,24.17" />
            <path className={style.line3} d="M61.84,44.92C61.84,44.92,-3.57,44.89,12.49,45.0C12.49,45.0,13.24,45.0,13.24,45.0C13.24,45.0,32.5,24.0,32.5,24.0C32.5,24.0,13.07,3.0,13.07,3.0" />
        </svg>
        </>
    )
}
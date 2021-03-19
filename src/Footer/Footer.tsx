import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import SocialNetwork from "./socialNetwork/socialNetwork";
import git from '../assets/image/footer/github.svg'
import vk from '../assets/image/footer/vk.svg'
import linkedIn from '../assets/image/footer/in.svg'


const Footer = () => {
    const gitHub = {
        link: 'https://github.com/Condor19-prog',
        image: git
    }
    const vkImage = {
        link: 'https://vk.com/id185786693',
        image: vk
    }
    const linkedInImage = {
        link: '404',
        image: linkedIn
    }


    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                {/*<h2 className={style.title}>Yauheni</h2>*/}
                <div className={style.footerSocialContainer}>
                    <SocialNetwork link={gitHub.link} image={gitHub.image}/>
                    <SocialNetwork link={vkImage.link} image={vkImage.image}/>
                    <SocialNetwork link={linkedInImage.link} image={linkedInImage.image}/>
                </div>
            </div>
        </div>
    )
}
export default Footer
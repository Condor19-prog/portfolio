import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import SocialNetwork from "./socialNetwork/socialNetwork";
import git from '../assets/image/footer/github.svg'
import vk from '../assets/image/footer/vk.svg'
import linkedIn from '../assets/image/footer/in.svg'
import {Fade} from "react-awesome-reveal";


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
        link: 'https://www.linkedin.com/in/yauheni-auchynnikau-009426209/',
        image: linkedIn
    }


    return (
        <div className={style.footerBlock}>
            <Fade damping={0} direction={'up'} fraction={0.1} triggerOnce={true}>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <div className={style.footerSocialContainer}>
                        <SocialNetwork link={gitHub.link} image={gitHub.image}/>
                        <SocialNetwork link={vkImage.link} image={vkImage.image}/>
                        <SocialNetwork link={linkedInImage.link} image={linkedInImage.image}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default Footer
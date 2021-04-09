import style from './button.module.scss'

export const Button = () => {
    return (
            <div className={style.center}>
                <button className={style.btn}>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" >
                        <polyline points="179,1 179,59 1,59 1,1 179,1" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" />
                    </svg>
                    <span>Send Message</span>
                </button>
             </div>
    )
}
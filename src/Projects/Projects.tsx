import React from "react";
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

type projectsType = {
    title: string
}
const Projects: React.FC<projectsType> = ({title}) => {

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.projects}>
                    <Project title={'Social-network'} description={'ehbchewbcjwe jhwe jhd wejhd jwhe djwhe cw c'}/>
                    <Project title={'Todolist'} description={'wejhbwejd bcweh dhwe dhweg hwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjgechgwe chw ech wec'}/>
                    <Project title={'какой-то'} description={'wejhbwejd bcweh dhwe dhweg hwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjgechgwe chw ech wec'}/>
                    <Project title={'какой-то еще'} description={'wejhbwejd bcweh dhwe dhweg hwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjhwegv hcg whwehchwjjjjjjgechgwe chw ech wec'}/>
                </div>
            </div>
        </div>
    )
}
export default Projects
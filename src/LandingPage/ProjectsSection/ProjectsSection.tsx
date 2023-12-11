import styles from './ProjectsSection.module.css'
import PageSection from '../../GeneralComponents/PageSection';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { };

export default function ProjectsSection(props: Props) {
    const { visualMode } = props;
    
    return (
        <PageSection title='Projects' id="projectsSection" style={contentStyle} visualMode={visualMode}>
            <p>Placeholder</p>
        </PageSection>
    );
}

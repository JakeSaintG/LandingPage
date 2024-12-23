import PageSection from '../../GeneralComponents/PageSection';
import styles from './BlogSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = {};

export default function ContactSection(props: Props) {
    const { visualMode } = props;
    
    return (
        <PageSection title='Blog' id="blogSection" style={contentStyle} visualMode={visualMode}>
            <p>Placeholder</p>
        </PageSection>
    );
}

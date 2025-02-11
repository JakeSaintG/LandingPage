import PageSection from '../../GeneralComponents/PageSection';
import styles from './ContactSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = {};


// Just make this a footer. No need for a whole section (refactor)
export default function ContactSection(props: Props) {
    const { visualMode } = props;
    
    return (
        <PageSection title='Contact' id="contactSection" style={contentStyle} visualMode={visualMode}>
            <p>Placeholder</p>
        </PageSection>
    );
}

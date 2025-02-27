import PageSection from '../../GeneralComponents/PageSection';
import styles from './BlogSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

// TODO: The page will randomly scroll down when on the blog section. Find out why.
export default function ContactSection(props: Props) {
    const { visualMode } = props;
    
    return (
        <PageSection title='Blog' id='blogSection' style={{}} visualMode={visualMode}>
            <p className={styles.placeholder}>Placeholder</p>
        </PageSection>
    );
}

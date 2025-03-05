import PageSection from '../../GeneralComponents/PageSection';
import styles from './BlogSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export default function BlogSection(props: Props) {
    const { visualMode } = props;
    
    return (
        <PageSection title='Blog' id='blogSection' style={{}} visualMode={visualMode}>
            <p className={styles.placeholder}>Placeholder</p>
        </PageSection>
    );
}

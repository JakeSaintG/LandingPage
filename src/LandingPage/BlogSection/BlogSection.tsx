import PageSection from '../../GeneralComponents/PageSection';
import BlogDialog from './BlogDialog';

// Temp
import BlogPreview from './BlogPreview';
import styles from './BlogSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export default function BlogSection(props: Props) {
    const { visualMode } = props;
    
    return (
        <PageSection title='Blog' id='blogSection' style={{}} visualMode={visualMode}>
            <BlogPreview visualMode={props.visualMode}></BlogPreview>


            {/* <BlogDialog visualMode={props.visualMode}></BlogDialog> */}
        </PageSection>
    );
}

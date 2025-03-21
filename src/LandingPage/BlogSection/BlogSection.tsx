import { useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
// import blogs from '../../assets/blogs.json'
// import BlogDialog from './BlogDialog';

// Temp
import BlogPreview from './BlogPreview';
import styles from './BlogSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export default function BlogSection(props: Props) {
    const { visualMode } = props;

    const [isBlogDisplayed, setIsBlogDisplayed] = useState(true);

    const toggleIsBlogDisplayed = () => {setIsBlogDisplayed(!isBlogDisplayed)}

    return (
        <PageSection title='Blog' id='blogSection' style={{}} visualMode={visualMode}>
            <div className={`${styles.blogs} ${styles[visualMode]}`}>

            {/* loop to make these */}
            <BlogPreview visualMode={props.visualMode} displayBlog={toggleIsBlogDisplayed}></BlogPreview>
            <BlogPreview visualMode={props.visualMode} displayBlog={toggleIsBlogDisplayed}></BlogPreview>


            {/* <BlogDialog visualMode={props.visualMode}></BlogDialog> */}
            </div>
        </PageSection>
    );
}

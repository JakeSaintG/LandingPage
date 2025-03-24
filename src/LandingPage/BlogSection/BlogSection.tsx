import { useState } from 'react';
import styles from './BlogSection.module.css';
import PageSection from '../../GeneralComponents/PageSection';
import blogs from '../../assets/blogs.json'
import { blog } from './BlogPreview/BlogPreview';
// import BlogDialog from './BlogDialog';
import BlogPreview from './BlogPreview';


interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export default function BlogSection(props: Props) {
    const { visualMode } = props;
    let key = 0;

    const [isBlogDisplayed, setIsBlogDisplayed] = useState(true);

    const toggleIsBlogDisplayed = () => {setIsBlogDisplayed(!isBlogDisplayed)}

    return (
        <PageSection title='Blog' id='blogSection' style={{}} visualMode={visualMode}>
            <div className={`${styles.blogs} ${styles[visualMode]}`}>

            {blogs.map((b: blog) =>
                <BlogPreview visualMode={props.visualMode} displayBlog={toggleIsBlogDisplayed} key={key++} blog={b}></BlogPreview>
            )}

            {/* loop to make these */}

            </div>
        </PageSection>
    );
}

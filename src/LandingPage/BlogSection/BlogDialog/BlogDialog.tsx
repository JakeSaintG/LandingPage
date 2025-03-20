import styles from './BlogDialog.module.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
}

// Use marked (2nd response) or react-markdown for rendering an .md file
// https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component

// May need to use componentWillMount to load in the blog?
// https://www.geeksforgeeks.org/what-is-componentwillmount-method-in-reactjs/

export default function BlogDialog(props: Props) {


    return (

        <div
            className={`${styles.placeholder_blog_preview} ${styles[props.visualMode]}`}
        >
            Placeholder blog dialog
        </div>

    );
}

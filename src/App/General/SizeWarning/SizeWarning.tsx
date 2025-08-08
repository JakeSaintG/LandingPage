import styles from './SizeWarning.module.css';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export function SizeWarning( props: Props ) {
    return (
        <div className={`${styles.size_warning} ${styles[props.visualMode]}`}>
            <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="xl"
                aria-hidden="true"
            />
            <p>
                Heads up! Your window sizing may not give you the best
                experience on this page. Please consider expanding the
                window a little.
            </p>
        </div>
    );
}
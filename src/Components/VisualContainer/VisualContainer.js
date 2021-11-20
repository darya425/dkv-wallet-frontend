import styles from './visualContainer.module.scss'

export default function VisualContainer({ children }) {
    return (
        <div className={styles.visualContainer}>
            <div className={styles.visualLine}>
                {children}
            </div>            
        </div>
)
}
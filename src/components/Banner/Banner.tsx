import React from 'react';
import styles from './Banner.module.scss';

interface BannerProps {
    url: string,
    alt?: string
}

export default function Banner({url, alt}: BannerProps) {
    return (
        <header className={styles.banner}>
            <img src={url} alt={alt} />
        </header>
    )
}


import './Footer.css'
import Button from '../AllButton/Button';
import styles from '../AllButton/Button.module.css';
import '../../main.scss'

function Footer() {
    return (

        <div className='footer'>
            <h2 className={styles.footerh2}>Footer page</h2>
            <Button />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempore nemo consectetur aliquam harum maxime qui mollitia optio nesciunt facilis!</p>
        </div>

    );
}

export default Footer;
import { useState } from 'react';
import { Hidden, Box, Button, makeStyles } from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router'
import BurgerMenu from '../menu/BurgerMenu';


const useStyles = makeStyles((theme) => ({
    signinBackground: {
        color: '#FFFFFF',
        padding: '0 1rem',
        background: 'linear-gradient(to right, #45B649, #DCE35B)',
    },
}));
const BurgerLinks = () => {
    const styles = useStyles();
    const router = useRouter();
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <Hidden mdUp>
                <Box zIndex={1}>
                    <Hamburger
                        size={22}
                        toggled={toggle}
                        toggle={() => setToggle(!toggle)}
                    />
                </Box>
            </Hidden>
            <Hidden mdDown>
                <Button>Signup</Button>
                <Button className={styles.signinBackground} onClick={() => router.push('/auth/Signin')} >Signin</Button>
            </Hidden>
            <BurgerMenu open={toggle} />
        </>
    )
}

export default BurgerLinks

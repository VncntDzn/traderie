import { useState } from 'react';
import { Grid, Hidden, Box, Button, makeStyles } from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import BurgerMenu from '../menu/BurgerMenu';


const useStyles = makeStyles((theme) => ({
    signinBackground: {
        color: '#FFFFFF',
        padding: '0 1rem',
        background: 'linear-gradient(to right, #45B649, #DCE35B)',
    },
}));
const BurgerLinks = () => {
    const styles = useStyles()
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <Grid
                container
                item
                justify='space-around'
                direction='row'
                lg={2}
                xs={3}
            >
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
                    <Button className={styles.signinBackground}>Signin</Button>
                </Hidden>
            </Grid>
            <BurgerMenu open={toggle} />
        </>
    )
}

export default BurgerLinks
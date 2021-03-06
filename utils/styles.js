import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#351F39',

        '& a': {
            color: '#ffff',
            marginLeft: 10,

        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',

    },
    grow: {
        flexGrow: 1,
    },
    main: {
        minHeight: '80vh'

    },
    footer: {
        backgroundColor: '#351F39',
        height: 80,
        color: '#ffff',
        textAlign: 'center',
        marginTop: 80,

    },
    section: {
        margin: 20,

    },
    form: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
    },
    navbarButton: {
        color: '#ffffff',
        textTransform: 'initial',
    },
    transparentBackground: {
        backgroundColor: 'transparent',
    },
    error: {
        color: '#f04040',
    },
    fullWidth: {
        width: '100%',
    },

    toolbar: {
        justifyContent: 'space-between',
    },

    menuButton: {padding: 0},
    mt1: {marginTop: '1rem'},
    // search
    searchSection: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    searchForm: {
        border: '1px solid #ffffff',
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    searchInput: {
        paddingLeft: 5,
        color: '#000000',
        '& ::placeholder': {
            color: '#606060',
        },
    },
    iconButton: {
        backgroundColor: '#351F39',
        padding: 5,
        borderRadius: '0 5px 5px 0',
        '& span': {
            color: '#000000',
        },
    },
    sort: {
        marginRight: 5,
    },
    featuredImage: {

        height: 500,
        width: 1300,


    }
}))

export default useStyles
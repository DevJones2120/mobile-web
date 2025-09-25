

const Header = (props) => {

const headerStyle = {
    background: '#faec2eff',
    padding: '20px',
    textAlign:'center',
    borderBottom: '5px solid rgb(184, 0, 31)'
}


const titleStyle = {
    margin: 0,
    fontSize: '24px',
    color: 'rgb(184, 0, 31)'
}


    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>

        </header>
        
    );
}

export default Header

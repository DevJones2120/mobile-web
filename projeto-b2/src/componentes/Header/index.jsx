

const Header = (props) => {

const headerStyle = {
    background: 'rgb(67, 112, 87)',
    padding: '20px',
    textAlign:'center',
    borderBottom: '5px solid rgb(177, 171, 134)'
}


const titleStyle = {
    margin: 0,
    fontSize: '24px',
    color: 'rgb(177, 171, 134)'
}


    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>

        </header>
        
    );
}

export default Header

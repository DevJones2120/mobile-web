

const Header = (props) => {

const headerStyle = {
    background: '#9c1515ff',
    padding: '20px',
    textAling:'center',
    borderBottom: '2px solid #ff6dbdff'
}


const titleStyle = {
    margin: 0,
    fontSize: '24px',
    color: '#f9f9fdff'
}


    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>

        </header>
        
    );
}

export default Header

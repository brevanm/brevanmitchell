import ProfilePic from "../../components/ProfilePic"

const Root = () => {
    return (
        <div id="nav">
            <div id="nav-content">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <ProfilePic size={3}/>
                <h2 style={{marginLeft: 10}}>Brevan Mitchell</h2>
            </div>
            <ul>
                <li>home</li>
                <li>protfolio</li>
                <li>resume</li>
            </ul>
            </div>
        </div>
    )
}

export default Root
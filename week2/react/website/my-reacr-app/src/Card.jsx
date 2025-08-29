import profilePic from './assets/DailyHero.png';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Lev Code</h2>
            <p className="card-description">I am a software engineer</p>
        </div>
    );
}

export default Card;
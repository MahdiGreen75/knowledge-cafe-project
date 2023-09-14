import profilePic from '../../assets/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-5 mx-5 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profilePic} alt="" />
        </header>
    );
};

export default Header;

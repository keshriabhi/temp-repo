import Classes from './Mainpage.module.css';
import Topbar from './Topbar';

const Mainpage = () => {
    return(
        <div>
            <Topbar/>
            <div className={Classes.container}>
                <div className={Classes.contentWrapper}>
                    <h1 className={Classes.heading}>Welcome Alvin Kumar</h1>
                    <h2 className={Classes.message}>You have already booked a room.</h2>
                    <h2 className={Classes.subheading}>Your room details are as follows : </h2>
                    <p className={Classes.details}>Hostel No. <span>B4</span></p>
                    <p className={Classes.details}>Room No.<span>8</span></p>
                </div>
            </div>
        </div>
    )
}
export default Mainpage;
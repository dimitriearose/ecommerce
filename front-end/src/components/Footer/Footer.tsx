import './Footer.scss'

function Footer() {
    const getYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className="footer">
            <div className="footer__container">
            <h1>{getYear()} Coursify</h1>
            <h3>3456 Road Street Drive, Melbourne, Australia</h3>
            <h3>(661)777-7776</h3>
            </div>
        </div>
    )
}

export default Footer

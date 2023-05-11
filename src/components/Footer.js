import img from '../img/R.gif';

function Footer() {
  return (
    <footer>
        <div className="container footer">
            <figure className="footerImg">
                <img src= {img} alt={''}/>
            </figure>
            <p className="copyright">Designed by Shiyu Li &copy; 2023 &#128103;</p>
        </div>
    </footer>
  )
}

export default Footer;
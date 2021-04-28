import './Footer.css';
import '../../images/github-text-logo.png';

function Footer() {

  return (
    <>
      <div className="footer">
        <p>Follow Trekker and Coder: Lisa Noor</p>
        <a href="https://https://github.com/Skulllady">
          <img src={"../../images/github-text-logo.png"} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/">
          <img src={"../../images/linked-in.png"} alt="LinkedIn" />
        </a>
        <p>Website powered by Javascript, React and Redux</p>
      </div>
    </>
  )
}



export default Footer;

import './Footer.css';
import githubLogo from '../../images/github-text-logo.png';
import linkedIn from '../../images/linked-in.png';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <p> 🖖 Track trekker, Lisa Noor, on:
            <a href="https://github.com/Skulllady">
              <img src={githubLogo} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}



export default Footer;

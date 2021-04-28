import './Footer.css';
import githubLogo from '../../images/github-text-logo.png';
import linkedIn from '../../images/linked-in.png';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <p>Follow Trekker and Coder:   Lisa Noor 🖖
            <a href="https://github.com/Skulllady">
              <img src={githubLogo} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </p>
          <p className="optional-footer">Website powered by Javascript, React and Redux</p>
        </div>
      </footer>
    </>
  )
}



export default Footer;

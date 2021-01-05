import "./Footer.scss"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footerCopyRight">
          CYF Final Project , Team 404 Not Found
        </div>

        <div className="registration">
          © All rigths reserved | Registered charity 1174929 |{' '}
          <a
            href="https://codeyourfuture.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeYourFuture
          </a>{' '}
          | 2020 Copyright{' '}
        </div>
      </footer>
    );
};

export default Footer;
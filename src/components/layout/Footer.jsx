function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="copyright-info">
        <small>&copy;{year} Peter Hinch, All rights reserved.</small>
      </div>
      <div className="acknowledge-country">
        <div className="flag"></div>
        <small>
          We acknowledge the Traditional Custodians of the land on which
          RemoteSpot is based - The Wurundjeri people of the Kulin Nation, and
          pay our respects to elders past, present and emerging.
        </small>
      </div>
    </footer>
  );
}

export default Footer;

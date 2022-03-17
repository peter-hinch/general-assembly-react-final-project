function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <small>&copy;{year} Peter Hinch, All rights reserved.</small>
    </footer>
  );
}

export default Footer;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="acknowledge-country">
        We acknowledge the Traditional Custodians of the land on which we
        operate - The Wurundjeri people of the Kulin Nation, and pay our
        respects to elders past, present and emerging.
      </div>
      <small>&copy;{year} Peter Hinch, All rights reserved.</small>
    </footer>
  );
}

export default Footer;

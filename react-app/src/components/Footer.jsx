export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Site Powered by Wordpress. Design and Developed by VIVROCKS.</p>
            <a href="">Home</a>
            <a href="">| About</a>
            <a href="">| Products</a>
            <a href="">| Services</a>
            <a href="">| Contact</a>
            <br />
            <a href="">Privacy Policy</a>
            <a href="">| Terms of use</a>
          </div>
          <div className="col col1">
            <p>Copyright <span id="year">{year}</span>. Studio VIVROCKS. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FOOTER_CONTENT = [
  {
    heading: "collection",
    links: ["All Models", "Phantom", "Ghost", "Cullinan", "Wraith", "Spectre"],
  },
  {
    heading: "Company",
    links: ["Our Story", "Bespoke", "Certification", "Press", "Careers"],
  },
  {
    heading: "Contact",
    links: [
      "Monaco Office",
      "London Office",
      "Private Enquiry",
      "Concierge",
      "FAQ",
    ],
  },
];

function Footer({ currentPage, navigate }) {

   const handleFooterLink = (linkText) => {
    switch(linkText) {
      case 'All Models':
      case 'Phantom':
      case 'Ghost':
      case 'Cullinan':
      case 'Wraith':
      case 'Spectre':
        navigate("collection");
        break;
      case 'Our Story':
      case 'Bespoke':
      case 'Certification':
      case 'Press':
      case 'Careers':
        navigate("about");
        break;
      case 'Monaco Office':
      case 'London Office':
      case 'Private Enquiry':
      case 'Concierge':
      case 'FAQ':
        navigate("contact");
        break;
      default:
        console.log("Unknown link:", linkText);
    }
  };

  
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-intro-text">
          <h2 className="footer-heading title">
            Red<span>Blue</span> Rolls
          </h2>
          <p className="footer-text">
            The world's most exclusive Rolls-Royce <br />
            acquisition service. Private. Precise. Perfection.
          </p>
        </div>

         {FOOTER_CONTENT.map((content, index)=>
      <div key={index} className="footer-content">
        <h1 className="footer-content-heading">{content.heading}</h1>
        <div className="footer-links">
          {content.links.map((element, index)=>(
            <p className="footer-link" key={index}>
              <button 
                className="footer-button" 
                onClick={() => handleFooterLink(element)}
              >
                {element}
              </button>
            </p>
          ))}
        </div>
      </div>
    )}
      </div>
      <div className="footer-bottom">
        <p>
          © 2024 RedBlue Rolls. All rights reserved. Not affiliated with
          Rolls-Royce Motor Cars Ltd.
        </p>
        <p>Monaco · London · Dubai · Singapore</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer(props) {
  return (
    <div class="footer-basic" id="contact-me">
      <footer>
        <div class="column"></div>
        <div class="social">
          <a
            href="https://www.instagram.com/bil.ersy13/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-ersoy-5613311b8/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-linkedin"></i>
          </a>
          <a href="https://github.com/bee-13" target="_blank" rel="noreferrer">
            <i class="icon ion-social-github"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li>
            <a href="mailto:bilalersoy740@gmail.com">Email</a>
          </li>
          {/* <br /> */}
          {/* <li>Cell: 201-887-8175</li> */}
        </ul>
        <p class="copyright">Bilal's Professional Portfolio © 2022</p>
      </footer>
    </div>
  );
}

export default Footer;

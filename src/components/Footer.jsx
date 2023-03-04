import React from "react";

const yr = new Date();
const yr1 = yr.getFullYear();
function Footer() {
    return <footer>
    <p>Copyright © {yr1}</p>
    </footer>
}

export default Footer;
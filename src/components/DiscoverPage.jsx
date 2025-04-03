import React from "react";
import "./DiscoverPage.css";

const DiscoverPage = () => {
  return (
    <div className="container">
      <h1 className="title">DISCOVER</h1>
      <div className="section">
        <div className="one">
          <div>
            <img
              src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/vivo-x200-series-india-everything-we-know-about-the-most-anticipated-smartphones.jpg"
              width="450"
              height="300"
              alt="VIVO X200 PRO"
            />
            <p>VIVO X200 PRO</p>
          </div>
          <div>
            <img
              src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/12/cover-5.webp?ssl=1&quality=80&w=f"
              width="450"
              height="300"
              alt="IPHONE 16"
            />
            <p>IPHONE 16</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.samsungmobilepress.com/file/A7FB9487B074076C06263FA484D21B74535765D48EE1BBFF7896D96C203A619CE56B677DA4F33C42F917EAA281EFDE400E05CDF1B6F853F604C39A009761EBE5969D8C07978635DB0D809AC0C9610E39665C7E2A232F030B098523238D58C19E6FFE28D8CDB7D629A3FAC508E537815E81C1B19D94FC9D7D4748BB4693B855306CD0FA33B91AE9A89C0C99405C47C369"
            width="400"
            height="670"
            alt="Galaxy S25 Ultra"
          />
          <p id="p">Galaxy S25 Ultra</p>
        </div>
        <div className="three">
          <div>
            <img
              src="https://media.assettype.com/analyticsinsight/2025-01-13/rp85h44h/Red-Magic-10-Pro.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
              width="470"
              height="300"
              alt="Red Magic 10 Pro"
            />
            <p>Red Magic 10 Pro</p>
          </div>
          <div>
            <img
              src="https://tomindia.s3.ap-south-1.amazonaws.com/prod/uploads/image/a876vJWtV6sljWikoLkd_Realme-14-pro-tomorrowsindia.jpg"
              width="470"
              height="300"
              alt="Realme 14 Pro"
            />
            <p>Realme 14 Pro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;

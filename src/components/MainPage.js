import React from "react";
import NavBar from "./NavBar";
import StudentDetails from "./StudentDetails";

const MainPage = ({ toggle }) => {
  return (
    <div className="main-page">
      <NavBar toggle={toggle} />
      <div className="body-area">
        <div className="middle">
          <StudentDetails />
        </div>
        <div className="right-side">
          Deleniti laboriosam quisquam obcaecati modi et possimus id neque
          magnam aut quibusdam facere exercitationem illo, voluptates cupiditate
          cumque numquam magni sapiente voluptas commodi quae debitis natus
          enim. Nobis repellendus soluta natus voluptate nulla ad amet
          reiciendis. Aliquam, possimus repellendus dignissimos error
          accusantium labore exercitationem voluptatem deleniti minus, iste
          nihil facilis voluptatum quod mollitia magni provident ipsa nulla
          excepturi esse. Debitis aperiam eligendi sed assumenda nihil velit!
          Incidunt aperiam, quis consequuntur a officia delectus harum iusto
          obcaecati libero dolores suscipit saepe voluptatibus ad sed aliquid
          eos sequi blanditiis sit voluptates fugiat. Omnis accusantium aliquid,
          quo quibusdam voluptas sunt error reprehenderit ullam deserunt? Hic
          quaerat iure debitis corrupti ipsa!
        </div>
      </div>
    </div>
  );
};

export default MainPage;

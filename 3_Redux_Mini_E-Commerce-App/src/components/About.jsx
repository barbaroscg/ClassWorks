import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <h1>Hakkımızda</h1>
          <div className="col-md-6 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
              asperiores optio voluptatem recusandae neque in dolor, maxime,
              beatae laudantium unde illum eos placeat vitae sunt voluptas cum
              maiores! Laboriosam est saepe quis cumque, asperiores dolorum
              blanditiis, sequi minus odit eligendi maiores, ad distinctio ex
              voluptatem pariatur nulla quibusdam alias magni! Ratione, optio.
              Eveniet hic iste quia minus temporibus, eligendi enim eaque
              similique neque corporis laborum debitis facere magnam incidunt a
              voluptas aspernatur magni culpa eum modi sit. Atque ipsam maiores
              inventore, incidunt ducimus ex voluptas? Eius beatae repudiandae
              excepturi ipsam repellat corporis modi nostrum voluptates, unde,
              et commodi accusamus sapiente distinctio. Eaque dolores veniam
              porro voluptas at. Unde facilis fugit culpa recusandae ducimus
              praesentium sit atque placeat architecto deleniti exercitationem
              vero ullam impedit velit odit esse.
            </p>
            <div className="row text-start w-25">
              <NavLink to="/contact" className="btn btn-outline-success ">
                Bize Ulaşın
              </NavLink>
            </div>
          </div>
          <div className="col-md-6 my-5">
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages.png"
              alt="about us"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

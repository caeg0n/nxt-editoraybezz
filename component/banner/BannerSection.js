"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5>Bem vindo ao Ybezz!</h5>
              <h1>
                Estudantes por uma Educação <span>Menor</span>.
              </h1>
              <p>
                Nossa agência só pode ser tão forte quanto as nossas pessoas, e por causa da equipe nós projetamos produtos que mudam o jogo.
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn" href="/about">
                    Saiba Mais
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

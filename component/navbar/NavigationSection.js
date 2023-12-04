"use client";
import React from "react";
import { useEduorContext } from "@/context/EduorContext";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";

const NavigationSection = ({ position, btnPosition, navRef }) => {
  const { isMobileNavOpen } = useEduorContext();
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <a className="nav-link">
            Home <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/">inicio</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/home-2">inicio 2</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/home-3">inicio 3</SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="/about">sobre nós</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/courses">cursos</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/blog">blog</Navlink>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            paginas <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/courses/development-theory-learn">
                detalhe dos cursos
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/blog/learn-with-these-award-winning-best-blog-collage-courses">
                detalhe do blog
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events">event</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events/outdoor-this-games">
                detalhes dos eventos
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/team">time</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/team/john-smith">detalhes do time </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/faq">FAQs</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-in">entrar</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-up">registrar</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/terms-condition">
                termos e condições
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/privacy-policy">politica de privacidade</SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="/contact">contato</Navlink>
        </li>
        {btnPosition ? null : (
          <li className="nav-item">
            <a className="nav-link common_btn" href="#">
              APREDA MAIS
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a className="common_btn_2 ms-auto" href="#">
          aprenda mais
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;

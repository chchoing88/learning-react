import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { PageTemplate } from './pageTemplate'
import { AboutMenu } from './aboutMenu';
import { Services } from './service'

export const Home = () =>
  <PageTemplate>
    <section className="home">
      <h1>[홈페이지]</h1>
    </section>
  </PageTemplate>

export const About = () =>
  <PageTemplate>
    <section className="about">
      <h1>[회사소개]</h1>
      <Route component={AboutMenu}></Route>
      <Route exact path="/about/service" component={Services}></Route>

    </section>
  </PageTemplate>

export const Events = () =>
  <PageTemplate>
    <section className="home">
      <h1>[이벤트]</h1>
    </section>
  </PageTemplate>

export const Products = () =>
  <PageTemplate>
    <section className="home">
      <h1>[제품]</h1>
    </section>
  </PageTemplate>

export const Contact = () =>
  <PageTemplate>
    <section className="home">
      <h1>[고객 지원]</h1>
    </section>
  </PageTemplate>

export const Whoops404 = ({ location }) =>
  <PageTemplate>
    <div className="home">
      <h1>`{location.pathname}` 경로의 자원을 찾을수 없습니다.</h1>
    </div>
  </PageTemplate>
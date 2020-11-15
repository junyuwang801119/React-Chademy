/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import e_video from '../images/oljn5-343em.mp4'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/FundHomepage.scss'
// import 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import BookMarkhp from '../components/BookMarkhp'
import BookIconhp from '../components/BookIconhp'
import BookMarkTwo from '../components/BookMarkTwo'
import PopBmarkOne from '../components/PopBmark/PopBmarkOne'
import PopBmarkTwo from '../components/PopBmark/PopBmarkTwo'
import PopBmarkThree from '../components/PopBmark/PopBmarkThree'
import PopBmarkFour from '../components/PopBmark/PopBmarkFour'

import CarouselE from '../components/CarouselE'
import CarouselETwo from '../components/CarouselETwo'
import CarouselEThree from '../components/CarouselEThree'
import Edesign from '../components/Edesign'
import { useHistory } from 'react-router-dom'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'

function FundHomepage() {
  const [showProject, setShowProject] = useState(0)
  const [filterMark, setFilterMark] = useState(0)
  const [filterIcon, setFilterIcon] = useState(0)

  let history = useHistory()

  return (
    <>
      <header>
        <h1 className="e_slogan">椅子是佈置藝術更是生活的代表</h1>
        <div className="video">
          <video
            width="100%"
            loop="true"
            autoplay="autoplay"
            muted="true"
            preload="auto"
            src={e_video}
            alt=""
          />
        </div>
        <p className="p_video">
          本學院培育之新銳設計師，大膽之作
          <br />
          敬邀您一同欣賞
        </p>
      </header>
      <Container>
        <Col>
          <Row>
            <Link to="/fundlist" className="explore">
              探索
            </Link>
          </Row>
        </Col>
      </Container>
      <BookMarkhp setFilterMark={setFilterMark} />
      <BookIconhp setFilterIcon={setFilterIcon} />
      {filterMark === 0 && filterIcon === 0 ? <CarouselE /> : ''}
      {filterMark === 0 && filterIcon === 1 ? <CarouselE /> : ''}
      {filterMark === 0 && filterIcon === 2 ? <CarouselE /> : ''}
      {filterMark === 0 && filterIcon === 3 ? <CarouselEThree /> : ''}
      {filterMark === 0 && filterIcon === 4 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 0 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 1 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 2 ? <CarouselETwo /> : ''}
      {filterMark === 1 && filterIcon === 3 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 4 ? <CarouselE /> : ''}

      <div className="e_more_div" z-index="10">
        <div className="e_more" onClick={() => history.push('/fundlist')}>
          more
        </div>
      </div>
      <h1 className="e_popular">熱門募資專案</h1>
      <BookMarkTwo setShowProject={setShowProject} />
      {showProject === 0 ? <PopBmarkOne /> : ''}
      {showProject === 1 ? <PopBmarkTwo /> : ''}
      {showProject === 2 ? <PopBmarkThree /> : ''}
      {showProject === 3 ? <PopBmarkFour /> : ''}
      <h1 className="e_popular">設計學院</h1>
      <Edesign />
      <BackTop
        visibilityHeight="2000"
        style={{
          height: '40',
          width: '40',
          lineHeight: '33px',
          color: 'white',
          fontSize: '16px',
          borderRadius: '0',
          textAlign: 'center',
          backgroundColor: '#c77334',
        }}
      >
        <div>
          <UpOutlined
            style={{
              color: 'white',
              fontSize: '18px',
              borderRadius: '0',
              backgroundColor: '#c77334',
              marginTop: '-3px',
            }}
          />
        </div>
      </BackTop>
    </>
  )
}

export default FundHomepage

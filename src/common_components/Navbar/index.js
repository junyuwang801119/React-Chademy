import React from 'react'
import './index.scoped.scss'

import { Navbar, Nav } from 'react-bootstrap'

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import logo from '../images/logo.svg'

// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

// TODO: https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/

function MyNavbar(props) {
  const {
    activaName,
    setActivaName,
    navbarHeight,
    setNavbarHeight,
    scrollY,
    scrollDirection,
  } = props

  const isDown = scrollDirection === 'DOWN'
  const over100px = scrollY < -100
  const navbarPosition =
    !activaName && isDown && over100px ? `-${navbarHeight}px` : 0

  // console.log(scrollY, scrollDirection, isDown && over100px)

  const activeState = (name) =>
    name === activaName ? 'navbar_item_is_active' : ''

  return (
    <>
      <Navbar
        ref={(element) => {
          // console.log(3, element)
          // NOTE: 排除 el 為 null
          if (!element) return

          const { height } = element.getBoundingClientRect()
          setNavbarHeight(height)
        }}
        style={{
          top: navbarPosition,
        }}
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={`navbar_contanier ${activaName ? 'show_bg' : ''}`}
      >
        <Navbar.Brand
          onClick={() => setActivaName('')}
          href="#home"
          className="logo_brand"
        >
          <img
            className="navbar_logo"
            src={logo}
            width="80"
            height="80"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="m-auto justify-content-between"> */}
          <Nav className="navbar_list  justify-content-between text">
            <Nav.Link
              href="#about"
              onClick={() => {
                console.log(' click ')
                setActivaName('about')
              }}
              className={['text-center', activeState('about')]}
            >
              <div>品牌故事</div>
              <div className="text-center">ABOUT</div>
            </Nav.Link>

            <Nav.Link
              href="#product"
              onClick={() => setActivaName('product')}
              className={['text-center', activeState('product')]}
            >
              <div>經典產品</div>
              <div className="text-center">PRODUCT</div>
            </Nav.Link>
            <Nav.Link
              href="#antique"
              onClick={() => setActivaName('antique')}
              className={['text-center', activeState('antique')]}
            >
              <div>中古市集</div>
              <div className="text-center">ANTIQUE</div>
            </Nav.Link>
            <Nav.Link
              href="#bidding"
              onClick={() => setActivaName('bidding')}
              className={['text-center', activeState('bidding')]}
            >
              <div>精品競標</div>
              <div className="text-center">BIDDING</div>
            </Nav.Link>
            <Nav.Link
              href="#workshop"
              onClick={() => setActivaName('workshop')}
              className={['text-center', activeState('workshop')]}
            >
              <div>設計學院</div>
              <div className="text-center">WORKSHOP</div>
            </Nav.Link>
            <Nav.Link
              href="#funding"
              onClick={() => setActivaName('funding')}
              className={['text-center', activeState('funding')]}
            >
              <div>新創募資</div>
              <div className="text-center">FUNDING</div>
            </Nav.Link>
            <Nav.Link
              href="#blog"
              onClick={() => setActivaName('blog')}
              className={['text-center', activeState('blog')]}
            >
              <div>靈感探索</div>
              <div>BLOG</div>
            </Nav.Link>
          </Nav>

          <Nav className="icon_con">
            <Nav.Link href="#car">
              <AiOutlineShoppingCart className="icon" />
            </Nav.Link>
            <Nav.Link href="#members" as={NavLink} to="/login">
              <AiOutlineUser className="icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar

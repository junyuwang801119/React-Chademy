/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/bloglist.css'
import ImgBlogfour from '../images/04_blog.jpg'
import ImgBlogfive from '../images/05_blog.jpg'
import ImgBlogsix from '../images/06_blog.jpg'
import ImgBlogseven from '../images/07_blog.jpg'
import ImgBlogeight from '../images/08_blog.jpeg'
import ImgBlognine from '../images/09_blog.jpeg'
import ImgBlogten from '../images/10_blog.jpeg'
import ImgBlogele from '../images/11_blog.jpeg'
import ImgBlogtwe from '../images/12_blog.jpg'
import ImgBlogthi from '../images/13_blog.jpeg'
import ImgBlogfourt from '../images/14_blog.jpeg'
import ImgBlogfif from '../images/15_blog.jpeg'
import ImgBlogsixt from '../images/16_blog.jpeg'
import ImgBlogsevent from '../images/17_blog.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogListThree(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="container-fluid ">
      <div className="wrapper10">
        <div className="title01">
          <div className="titlech noto-serif text-center">相關文章</div>
          <div className="titleEN lora text-center">Correlative Articles</div>
        </div>

        <div
          className="a_list2"
          data-aos="fade-down"
          data-aos-delay="50000"
          data-aos-duration="2400"
          data-aos-once="true"
        >
          <div className="item">
            <img src={ImgBlogfour} alt="" />
            <h4>高級紅木家居</h4>
          </div>
          <div className="item">
            <img src={ImgBlogfive} alt="" />
            <h4>懷舊復古家居</h4>
          </div>
          <div className="item">
            <img src={ImgBlogsix} alt="" />
            <h4>乾淨潔白的舒適環境</h4>
          </div>
          <div className="item">
            <img src={ImgBlogseven} alt="" />
            <h4>檜木香13號房子</h4>
          </div>

          <div className="item">
            <img src={ImgBlognine} alt="" />
            <h4>彎木椅</h4>
          </div>

          <div className="item">
            <img src={ImgBlogele} alt="" />
            <h4>畢卡索設計風格家居</h4>
          </div>

          <div className="item">
            <img src={ImgBlogfif} alt="" />
            <h4>美女與寂靜</h4>
          </div>
          <div className="item">
            <img src={ImgBlogsixt} alt="" />
            <h4>原木的生活</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogListThree

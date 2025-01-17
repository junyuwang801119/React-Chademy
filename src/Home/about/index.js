import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import OurApproach from '../img/OurApproach_OvergaardDyrman-1.jpg'
import './About.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  let history = useHistory()
  console.log(history)
  return (
    <div
      className="row no-gutters mt_mb_100"
      data-aos="fade-up"
      data-aos-duration="2000"
      onClick={() => history.push('/brand')}
      style={{ cursor: 'pointer' }}
    >
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="aboutcompany">
          <img src={OurApproach} alt="" />
        </div>
      </div>

      <div className="col-lg-4 col-md-12 col-sm-12 ">
        <div className="companytext ">
          <p className="abouttitle noto-serif">從培訓到上線</p>
          <p className="p14  noto-sans">
            於1952年在台北誕生，如今已成為一個高檔的零售時尚品牌我們設計、生產並銷售一系列現代丹麥設計椅子，並開設課程提供現代設計的所有必備技能
          </p>
          <p className="p14 pd noto-sans">
            結業學員可於募資平台刊登尋求大量機會亦提供中古拍賣、藝術品競標等多項服務
          </p>
        </div>
      </div>
    </div>

    // <div classNameName={cx("no-gutters", "row")}>
    //     <div classNameName="col-lg-8 col-md-10 col-sm-12">
    //         <div classNameName={classNamees.aboutcompany}>
    //             <img src={OurApproach} alt="OurApproach" />
    //         </div>
    //     </div>
    //     <div classNameName="col-lg-4 col-md-2 col-sm-12">
    //         <div classNameName={classNamees.companytext}>
    //             <p classNameName="abouttitle noto-serif">從培訓到上線</p>
    //             <p classNameName="p14 pd noto-sans">於1952年在台北誕生，如今已成為一個高檔的零售時尚品牌我們設計、生產並銷售一系列現代丹麥設計椅子，並開設課程提供現代設計的所有必備技能
    //             </p>
    //             <p classNameName="p14 pd noto-sans">結業學員可於募資平台刊登尋求大量機會亦提供中古拍賣、藝術品競標等多項服務</p>
    //         </div>
    //     </div>
    // </div>
  )
}

export default About

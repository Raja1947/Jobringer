import React from 'react';
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.home}>
      <h1 className={style.title1}>Bringing you the Perfect Job !</h1>
      <h2 className={style.title1}>11,000+ JOBS to Apply</h2>
      <div className={style.holder_parent}>
        <div className={style.form_login}>
            <form className={style.form_inline}>
                <span>Search Jobs Now</span>
                <span>Search</span>
            </form>
            <div className={style.btn_log}></div>
        </div>
        <div className={style.flex_holder}></div>
      </div>
    </div>
  )
}

export default Home

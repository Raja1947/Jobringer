import React from 'react'
import style from './Employee.module.css'

const EmployeeDiv = () => {
  return (
    <div className={style.employee_div}>
        <div className={style.holder}>
        <h2 className={style.title1}>Employers</h2>
        </div>
        <div className={style.textholder}>
            <p className={style.text_anim}>
                <strong>WELCOME OFFER - </strong>
                FREE JOB Posting and Much More.
            </p>
        </div>
        <div className={style.btn_log}>
            <a href='' className={style.blue_btn}>Register For Free</a>
            <a href='' className={style.post_btn}>Post A Job</a>
            <a href='' className={style.sales_btn}>Sales Enquiry</a>
        </div>
    </div>
  )
}

export default EmployeeDiv

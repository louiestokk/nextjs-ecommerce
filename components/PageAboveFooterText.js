import React from 'react'

const PageAboveFooterText = ({title,seoText}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2.5rem",width:'100%', display:'flex',flexDirection:'column',justifyContent:'center' }}>
    <h2 style={{fontWeight:'bold',fontSize:'2rem',fontFamily:'Source Sans Pro, sans-serif',lineHeight:'36px',maxWidth:'90%',marginBottom:'1rem'}} className='populara-produkter'>{title}</h2>
      <p
        className="sans"
        style={{
          maxWidth: "90%",
          margin: "0rem auto",
          lineHeight: "25px",
          color: "black"
        }}
      >
{seoText}
      </p>

      <div style={{ margin: "2rem auto"}}>
        <h2 style={{fontWeight:'bold'}}>Very good</h2>
        <p>
          Based on <strong> 1540 reviews</strong>
        </p>
        <img
          src="https://www.snijpunt.com/files/thumbnails/trustpilot-logo-snijpunt.1600x680x1.png"
          alt="trustpilot"
          style={{ height: "120px", width: "300px", objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default PageAboveFooterText
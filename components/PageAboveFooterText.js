import React from 'react'

const PageAboveFooterText = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2.5rem",width:'100%', display:'flex',flexDirection:'column',justifyContent:'center' }}>
    <h2 style={{fontWeight:'bold',fontSize:'2rem',fontFamily:'Source Sans Pro, sans-serif',lineHeight:'36px'}} className='populara-produkter'>Hur hittar man rätt solglasögon?</h2>
      <p
        className="sans"
        style={{
          maxWidth: "90%",
          margin: "0rem auto",
          lineHeight: "25px",
          color: "black"
        }}
      >
       Att välja de perfekta solglasögonen handlar inte bara om att hitta det trendigaste paret, utan också om att säkerställa att de passar din livsstil och skyddar dina ögon på bästa sätt. Vid val av solglasögon är det viktigt att överväga faktorer som passform, UV-skydd, glastyp och stil. För att hitta de solglasögon som passar dig bäst, ta dig tid att prova olika modeller och utforska olika funktioner. Oavsett om du behöver solglasögon för sport, fritid eller stranden, kan vårt omfattande sortiment av solglasögon hjälpa dig att hitta det perfekta paret för din unika stil och behov. Utforska vår kollektion idag och ge dina ögon det skydd de förtjänar samtidigt som du ser fantastisk ut!
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
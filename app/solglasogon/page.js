import React from 'react'
import CategoryPageHeeader from '@components/CategoryPageHeeader'
import CategoryPageProducts from '@components/CategoryPageProducts';
import SeoAccordion from '@components/SeoAccordion';
import { seoAccordionText } from '@utils/seoaccordiontext';
import PageAboveFooterText from '@components/PageAboveFooterText';
const Solglasogon = () => {
  return (
    <div style={{width:'100%'}}>
      <CategoryPageHeeader slug={'Solglasogon'} />

      <div style={{marginTop:'1rem',display:'flex',justifyContent:'center',margin:'1rem 0.35rem'}}>
        <img src={'/assets/images/spring-deals-solglasogon.png'} alt={'spring deals solglasögon'}/>
      </div>
      
    <CategoryPageProducts />

    <SeoAccordion data={seoAccordionText} title={'Läs mer om våra solglasögon'}/>

 <PageAboveFooterText />
    </div>
  )
}

export default Solglasogon
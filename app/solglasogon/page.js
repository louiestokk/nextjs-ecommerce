import React from 'react'
import CategoryPageHeeader from '@components/CategoryPageHeeader'
import CategoryPageProducts from '@components/CategoryPageProducts';
import SeoAccordion from '@components/SeoAccordion';
import { seoAccordionText } from '@utils/seoaccordiontext';
import PageAboveFooterText from '@components/PageAboveFooterText';
import { solglasogonCatPage } from '@locales/solglasogon-cat-page/text'
import CategoryPageDealBanner from '@components/CategoryPageDealBanner';
import CatPageCategoriesLinks from '@components/CatPageCategoriesLinks';

const Solglasogon = () => {
  const {titleSv,titleEn,seoTextSv,seoTextEn} = solglasogonCatPage
  
  return (
    <div style={{width:'100%'}}>
      <CategoryPageHeeader slug={'Solglasogon'} url={'/assets/images/solglasogon-struts.png'} titelSv={titleSv} seoTextSv={seoTextSv}/>
<CatPageCategoriesLinks name={'Solglasögon'}/>
      <CategoryPageDealBanner url={'/assets/images/spring-deals-solglasogon.png'} alt={'spring deals solglasögon'}/>
      
    <CategoryPageProducts slug={'/api/solglasogon'}/>

    <SeoAccordion data={seoAccordionText} title={'Läs mer om våra solglasögon.'}/>

 <PageAboveFooterText title={'Hur hittar man rätt solglasögon?'} seoText={'Att välja de perfekta solglasögonen handlar inte bara om att hitta det trendigaste paret, utan också om att säkerställa att de passar din livsstil och skyddar dina ögon på bästa sätt. Vid val av solglasögon är det viktigt att överväga faktorer som passform, UV-skydd, glastyp och stil. För att hitta de solglasögon som passar dig bäst, ta dig tid att prova olika modeller och utforska olika funktioner. Oavsett om du behöver solglasögon för sport, fritid eller stranden, kan vårt omfattande sortiment av solglasögon hjälpa dig att hitta det perfekta paret för din unika stil och behov. Utforska vår kollektion idag och ge dina ögon det skydd de förtjänar samtidigt som du ser fantastisk ut!'}/>
    </div>
  )
}

export default Solglasogon
import CategoryPageHeeader from '@components/CategoryPageHeeader'
import CategoryPageDealBanner from '@components/CategoryPageDealBanner';
import CategoryPageProducts from '@components/CategoryPageProducts';
import SeoAccordion from '@components/SeoAccordion';
import PageAboveFooterText from '@components/PageAboveFooterText';
import { halsbandCatPage } from '@locales/solglasogon-cat-page/text';
import { seoAccordionTextHalsband } from '@utils/seoaccordiontext';

export default function Halsband() {
  const {titleSv,seoTextSv}= halsbandCatPage

  return <div style={{width:'100%'}}>
    <CategoryPageHeeader url='/assets/images/halsband-struts.png' titelSv={titleSv} seoTextSv={seoTextSv}/>
    <CategoryPageDealBanner url='/assets/images/spring-deals-halsband.png' alt={titleSv}/>
    <CategoryPageProducts slug='/api/halsband'/>
    <SeoAccordion data={seoAccordionTextHalsband} title={'Läs mer om våra halsband.'}/>
    <PageAboveFooterText title={'Hur väljer man rätt halsband?'} seoText={'Att välja rätt halsband kan vara avgörande för att komplettera din outfit och framhäva din personliga stil. För att göra det bästa valet är det viktigt att överväga flera faktorer. För det första bör du tänka på din egen stil och preferenser - föredrar du en subtil look eller ett mer iögonfallande statement? Sedan är det viktigt att ta hänsyn till tillfället och kontexten - ett elegant halsband kan vara perfekt för en formell tillställning medan ett mer avslappnat halsband kan passa bättre för vardagliga äventyr. Material och design är också viktiga att tänka på - välj ett halsband som inte bara är visuellt tilltalande utan också hållbart och av hög kvalitet. Slutligen, se till att halsbandets längd och passform kompletterar din hals och klädsel på ett smickrande sätt. Med dessa tips i åtanke kan du välja det perfekta halsbandet som speglar din unika stil och gör dig strålande vacker vid varje tillfälle.'}/>
  </div>
}
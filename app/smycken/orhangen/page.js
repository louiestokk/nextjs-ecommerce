import CategoryPageHeeader from '@components/CategoryPageHeeader'
import CategoryPageDealBanner from '@components/CategoryPageDealBanner';
import CategoryPageProducts from '@components/CategoryPageProducts';
import SeoAccordion from '@components/SeoAccordion';
import PageAboveFooterText from '@components/PageAboveFooterText';
import CatPageCategoriesLinks from '@components/CatPageCategoriesLinks';
import { orhangenCatPage } from '@locales/solglasogon-cat-page/text';

const Orhangen = () => {
  const {titleSv,seoTextSv} = orhangenCatPage
  return (
    <div style={{width:'100%'}}>
          <CategoryPageHeeader url='/assets/images/orhangen-struts.png' titelSv={titleSv} seoTextSv={seoTextSv}/>
          <CatPageCategoriesLinks name={'Örhängen'}/>
          <CategoryPageDealBanner url='/assets/images/spring-deals-orhangen.png' alt={titleSv}/>
          <CategoryPageProducts slug='/api/orhangen'/>
    </div>
  )
}

export default Orhangen
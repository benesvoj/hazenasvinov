// Purpose: Articles API
import {assets} from '../assets'

export type ArticlesProps = {
  id: number
  title: string
  content: string
}

export const articles = [
  {
    id: 1,
    title: 'Návrat z plzeňska se dvěma body',
    content:
      'K dalším utkáním jsme odjížděli v okleštěné sestavě na Plzeňsko, kde jsme se střetli s oběma finalisty minulého soutěžního ročníku. Sobotní utkání v Nezvěsticích nás nezastihlo v dobrém rozpoložení a naši hráči vyrobili příliš mnoho chyb. Soupeř si v prvním poločase zaslouženě vytvořil čtyřbrankový náskok. Ve druhém poločase se přece jen hra našeho družstva zlepšila, ale bohužel v okamžicích, kdy jsme se mohli soupeři přiblížit na dvě branky nás zradila střelba. V závěru jsme již jen kosmeticky upravili výsledek.',
    imgUrl: assets.article1,
  },
  {
    id: 2,
    title: 'Remiza z moravského derby',
    content:
      'K dalšímu utkání jsme zajížděli na hřiště nováčka z Brna, který se však rozhodně jako nováček nechová, a nebýt administrativní chyby činovníků oddílu, bylo by toto družstvo po osmém kole na druhém místě tabulky. První poločas byl brankově bohatý, družstva se přetahovaly o vedení, až v závěru jsem dokázali soupeři odskočit a vyhrát 1. poločas poměrem 14:12',
    imgUrl: assets.bgHero,
  },
  {
    id: 3,
    title: 'Domácí víkend se vydařil',
    content:
      'O víkendu jsem odehráli dvě utkání na domácím hřišti. V sobotu jsme přivítali soupeře z Nýřan. Byl to velmi vyrovnaný zápas, ve kterém se ani jedno družstvo nedostalo do výraznějšího vedení. Nakonec jsme byli šťastnější, když jsme z našeho posledního útoku dokázali skórovat a soupeř již nestihl vyrovnat. Utkání odřídil rozhodčí Jiří Maiwalder',
    imgUrl: assets.article1,
  },
]

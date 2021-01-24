import { NextPage } from 'next'

import { Head } from 'shared'
import { SHome } from 'styles'
import { bannerIMG, landingFoorIMG, landingOneIMG, landingThreeIMG, landingTwoIMG } from 'public/static'

const Home: NextPage = () => {
  return (
    <>
      <Head pageTitle="HOME" />
      <SHome className="page">
        <div>
          <img src={bannerIMG} alt="" />
        </div>

        <div>
          <h1>Bereit für den Sale des Jahres?</h1>

          <p>
            Am 27. November 2020 ist Black Friday. Doch einen Tag voller Schnäppchen kann jeder. Wir setzen noch einen
            drauf und machen aus dem Black Friday Sale eine ganze BLACK WEEK! Das heißt: Eine Woche lang von
            unglaublichen Rabatten profitieren und Shoppen bis zum Umfallen - und das ganz bequem vom Sofa aus.
          </p>
          <h3>Am Dienstag, 24. November 2020 um 12 Uhr geht's los.</h3>
          <p>
            Entdecken Sie schon jetzt Teppiche {'&'} Accessoires und merken Sie sich Ihre Favoriten für die
            Preisschlacht des Jahres vor.
          </p>
        </div>

        <div>
          <h2>Jetzt schon stöbern:</h2>
          <div>
            <div>
              <div id="neuheiten">
                <a href="#neuheiten">
                  <span>Neuheiten</span>
                </a>
                <img src={landingOneIMG} alt="" />
              </div>
              <div id="vintage-teppiche">
                <a href="#vintage-teppiche">
                  <span> Vintage Teppiche</span>
                </a>
                <img src={landingTwoIMG} alt="" />
              </div>
            </div>
            <div>
              <div id="hochflorteppiche">
                <a href="#hochflorteppiche">
                  <span>Hochflorteppiche</span>
                </a>
                <img src={landingThreeIMG} alt="" />
              </div>
              <div id="kurzflorteppiche">
                <a href="#kurzflorteppiche">
                  <span>Kurzflorteppiche</span>
                </a>
                <img src={landingFoorIMG} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SHome>
    </>
  )
}

export default Home

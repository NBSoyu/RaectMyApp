import React from 'react'
import Imagefirst from "../assets/images/Imagefirst.png"













function PageContent() {
  return (
    <div className='content'>
        <div className='buttoncategories container'> 
            <ul className='buttontable'>
                <li className='contenttabs'>
                    Show All
                </li>
                <li className='contenttabs'>
                    Design
                </li>
                <li className='contenttabs'>
                    Branding
                </li>
                <li className='contenttabs'>
                    Illustration
                </li>
                <li className='contenttabs'>
                    Motion
                </li>
            </ul>
            <div className='contentBlockImage'>
                <ul className='containerimage'>
                    <li className='content-Item'>
                        <article>
                            <img className='imageall' src={Imagefirst}/>
                        </article>
                    </li>
                    <li className='content-Item'>
                        <article>
                            <img className='imageall' src={Imagefirst}/>
                        </article>
                    </li>
                    <li className='content-Item'>
                        <article>
                            <img className='imageall' src={Imagefirst}/>
                        </article>
                    </li>
                    <li className='content-Item'>
                        <article>
                            <img className='imageall' src={Imagefirst}/>
                        </article>
                    </li>
                    <li className='content-Item'>
                        <article>
                            <img className='imageall' src={Imagefirst}/>
                        </article>
                    </li>
                    <li className='content-Item'>
                        <article>
                            <img className='imageall' src={Imagefirst}/>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PageContent
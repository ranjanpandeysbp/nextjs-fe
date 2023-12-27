"use client"
import Image from "next/image"
import styles from "./page.module.css"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();

  const handleRoute = () => {
    router.push('/contact/1?name=hello&age=56');
  }
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-lg-6">
              <h1>Next JS is an Awesome Framework!</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <button className="btn btn-warning mx-1">
                Read more</button>
              <button onClick={() => handleRoute()} className="btn btn-outline-primary mx-1">Contact</button>
            </div>
          </Fade>
          <Zoom>
            <div className="col-lg-6">
              <Image className="img-fluid"
                src="/img1.jpg"
                width={478}
                height={400}
                alt="Picture"
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default Home
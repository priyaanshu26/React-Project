import logowithname from "./images/logowithname.png"
import React from "react";
import Animatedgif from "./Animatedgif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <div>
            <div class="d-grid gap-2 col-6 mx-auto m-3 p-2">

                <img src={logowithname} alt="logo" id="nlogo" />
                <p>CyberDeck is the ultimate destination for playing, discussing, and creating games.</p>
                {/* <div class="data">
                    <div class="stats m-3">&#9741; Online </div>
                    <div class="stats m-3">&#9741; Playing Now</div>
                </div>
                <div class="data">
                    <div class="stats m-3">27,599,387</div>
                    <div class="stats m-3">7,629,611</div>
                </div> */}

                <div class="data">
                    <table>
                        <td class="p-4 " >
                            <tr class="text-success"> &#9741; Online</tr>
                            <tr>27,599,387</tr>
                        </td>
                        <td class="p-4">
                            <tr class="text-primary"> &#9741; Playing Now</tr>
                            <tr>7,629,611</tr>
                        </td>
                    </table>
                    <Animatedgif src="https://www.bing.com/th/id/OGC.d8912c46de2cf1e9c6f6341344997ae6?pid=1.7&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2fcCXGqogJEju2I9tBlY%2fgiphy.gif%3fcid%3d790b7611c438636a6ee198e1b4995080ae7c75f06987ab0d%26rid%3dgiphy.gif%26ct%3dg&ehk=QOGy%2fMIhDcjR70IQXrrMV%2fRJJ9Sg1txKv%2fm1IsOmeIg%3d" alt="Gif" />

                </div>


                <button class="btn btn-outline-info">Install CyberDeck <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"> <path fill="#dedede" d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" /></svg> </button>
                <p>Also available on: <svg class="ms-2 me-2" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 384 512"><path fill="#dedede" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>  
                
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512"><path fill="#dedede" d="M0 256C0 209.4 12.5 165.6 34.3 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.2 98.5C101 38.5 174 0 256 0C350.8 0 433.5 51.5 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"/></svg>
                
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 496 512"><path fill="#dedede" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/></svg>
                
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 576 512"><path fill="#dedede" d="M469.2 75A75.6 75.6 0 1 0 317.9 75a75.6 75.6 0 1 0 151.2 0zM154.2 240.7A75.6 75.6 0 1 0 3 240.7a75.6 75.6 0 1 0 151.2 0zM57 346C75.6 392.9 108 433 150 461.1s91.5 42.6 142 41.7c-14.7-18.6-22.9-41.5-23.2-65.2c-6.8-.9-13.3-2.1-19.5-3.4c-26.8-5.7-51.9-17.3-73.6-34s-39.3-38.1-51.7-62.5c-20.9 9.9-44.5 12.8-67.1 8.2zm395.1 89.8a75.6 75.6 0 1 0 -151.2 0 75.6 75.6 0 1 0 151.2 0zM444 351.6c18.5 14.8 31.6 35.2 37.2 58.2c33.3-41.3 52.6-92.2 54.8-145.2s-12.5-105.4-42.2-149.4c-8.6 21.5-24 39.6-43.8 51.6c15.4 28.6 22.9 60.8 21.9 93.2s-10.7 64-28 91.6zM101.1 135.4c12.4 2.7 24.3 7.5 35.1 14.3c16.6-24.2 38.9-44.1 64.8-58S255.8 70.4 285.2 70c.2-5.9 .9-11.9 2-17.7c3.6-16.7 11.1-32.3 21.8-45.5c-47.7-3.8-95.4 6-137.6 28.5S94.3 91.7 70.8 133.4c2.7-.2 5.3-.3 8-.3c7.5 0 15 .8 22.4 2.3z"/></svg>
                </p> 
            </div>
        </div>
    )
}
export default About;
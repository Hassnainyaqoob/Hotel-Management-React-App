
import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../../components/footers";
import Unoww from "./unow";



export default function About() {

    const naviagte = useNavigate()

    let ClickkMe = () => {
        naviagte("/about/unooww")
    }

    return (
        <>
            <button onClick={ClickkMe}>clidisi</button>
            <div>
                <h1 id="abooo" style={{ fontWeight: "bold", marginBottom: "1px", marginTop: 10, marginLeft: 17 }}>About Page</h1>
                <div style={{ backgroundColor: "black", width: 40, height: 3.5, marginLeft: "18px", marginBottom: 20 }}>
                </div>
                <div id="about-page">
                </div>
                <p className="paragraa">
                    Perspiciatis voluptate earum suscipit animi fugiat? Aut culpa provident veniam sed, libero aspernatur, eligendi veritatis quos, obcaecati facere adipisci beatae aliquid placeat voluptatum. Soluta minima alias aspernatur neque, placeat qui. At, illo libero.
                </p>
                <p className="paragraa">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, velit omnis! Quis nostrum voluptatibus necessitatibus ratione debitis saepe voluptates totam a atque autem, eius, error cupiditate eum recusandae distinctio rem? Quisquam possimus, aspernatur, optio quam deserunt inventore nisi, voluptatum aliquid consequuntur sint itaque. Commodi, a quo vero doloremque quas ut nulla distinctio, id ipsam voluptas adipisci quod impedit. Aliquid, nam. Doloribus voluptas minus voluptatibus veniam cupiditate! Corporis, consequatur ipsam. Rem quia officiis laborum non est? Corporis quisquam laboriosam, enim incidunt eum eligendi commodi ipsa ex assumenda. Officia beatae consequuntur velit. Voluptas qui necessitatibus cupiditate nulla, pariatur, sapiente autem ad neque similique quod assumenda. Quaerat a commodi tenetur animi placeat doloremque ea cum quod ex, aspernatur assumenda exercitationem dolor libero quos! Magni recusandae minima suscipit. Reprehenderit, dolorem maxime. Quisquam voluptas mollitia placeat. Delectus harum natus cumque commodi tenetur quas? Velit molestiae repellendus error officiis, voluptatum rerum iure dolore aliquid accusantium reiciendis. Minima nemo amet dolores dolorum itaque quia harum totam recusandae quae sequi omnis, fugiat aliquid odit consequuntur dicta ratione placeat sed corporis porro doloribus? Voluptatibus rerum nihil vel debitis non. Error placeat accusamus ea aspernatur beatae eos impedit saepe hic, atque, rerum sint unde maiores aut fugiat ipsa repellat, assumenda consectetur numquam cum quos iste velit eveniet! Debitis, doloribus est? Blanditiis, hic mollitia! Quidem rem ullam nulla natus eos illum maxime sint aut adipisci in deleniti, sit quis totam eum quia nam quae facilis amet quos? Vero ullam nostrum optio. Perspiciatis voluptate earum suscipit animi fugiat? Aut culpa provident veniam sed, libero aspernatur, eligendi veritatis quos, obcaecati facere adipisci beatae aliquid placeat voluptatum. Soluta minima alias aspernatur neque, placeat qui. At, illo libero. Voluptatem exercitationem, corrupti neque, id, reiciendis illo illum officia reprehenderit ad provident odio suscipit facilis magnam iste adipisci nulla voluptatum laboriosam nihil excepturi eius ipsum doloribus odit.
                </p>
                <p className="paaragraa">
                    Minima nemo amet dolores dolorum itaque quia harum totam recusandae quae sequi omnis, fugiat aliquid odit consequuntur dicta ratione placeat sed corporis porro doloribus? Voluptatibus rerum nihil vel debitis non. Error placeat accusamus ea aspernatur beatae eos impedit saepe hic, atque, rerum sint unde maiores aut fugiat ipsa repellat, assumenda consectetur numquam cum quos iste velit eveniet! Debitis, doloribus est? Blanditiis, hic mollitia! Quidem rem ullam nulla natus eos illum maxime sint aut adipisci in deleniti, sit quis totam eum quia nam quae facilis amet quos? Vero ullam nostrum optio. Perspiciatis voluptate earum suscipit animi fugiat? Aut culpa provident veniam sed, libero aspernatur, eligendi veritatis quos, obcaecati facere adipisci beatae aliquid placeat voluptatum. Soluta minima alias aspernatur neque, placeat qui. At, illo libero. Voluptatem exercitationem, corrupti neque, id, reiciendis illo illum officia reprehenderit ad provident odio suscipit facilis magnam iste adipisci nulla voluptatum laboriosam nihil excepturi eius ipsum doloribus odit.
                </p>
                <p className="paragraa">
                    Perspiciatis voluptate earum suscipit animi fugiat? Aut culpa provident veniam sed, libero aspernatur, eligendi veritatis quos, obcaecati facere adipisci beatae aliquid placeat voluptatum. Soluta minima alias aspernatur neque, placeat qui. At, illo libero. Voluptatem exercitationem, corrupti neque, id, reiciendis illo illum officia reprehenderit ad provident odio suscipit facilis magnam iste adipisci nulla voluptatum laboriosam nihil excepturi eius ipsum doloribus odit.
                </p>
            </div>
            
            
            <Routes>
                <Route path="/unooww" element={<Unoww />} />
            </Routes>

            <Footer id="foooter" />
        </>
    )
}
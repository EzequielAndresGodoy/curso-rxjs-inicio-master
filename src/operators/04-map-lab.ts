import { fromEvent, map, tap } from "rxjs";

const text = document.createElement("div");

text.innerHTML = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti aliquid pariatur odit blanditiis, eos expedita corporis recusandae animi ullam. Veritatis saepe, quae est eligendi accusamus alias harum ut perspiciatis.
<br/><br/>
Praesentium fuga deserunt voluptas qui ut cupiditate ea, maxime repudiandae dolore nihil recusandae quibusdam! Facilis, aspernatur! Officia ad, cupiditate porro sunt fugiat ipsum debitis tempora unde fuga temporibus nulla maiores!
<br/><br/>
Corrupti eveniet officiis praesentium molestiae vitae ipsam officia ipsa velit itaque blanditiis. Consequuntur nam quod quas deleniti exercitationem delectus beatae, reprehenderit maiores ullam harum mollitia, asperiores assumenda sed laudantium veniam.
<br/><br/>
Maxime dolore iste vero commodi aut possimus a officiis cumque reiciendis doloremque, expedita rerum ullam in obcaecati consectetur, beatae porro, dolores nisi neque voluptates autem sequi! Nulla magni ea maiores.
<br/><br/>
Atque laboriosam voluptas provident earum vero fugiat! Quibusdam accusamus, asperiores accusantium eveniet soluta aspernatur ipsa culpa nobis dolor atque nemo distinctio dolore, amet libero minus ea commodi voluptas unde? At.
`

const body = document.querySelector('body')
body.append(text)

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar)

//Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement

    return (scrollTop / (scrollHeight - clientHeight)) * 100;

}

//Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event) )
    map( calcularPorcentajeScroll )
)

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
} )
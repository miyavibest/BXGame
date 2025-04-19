// importing styles from styled-component
import { ScrollContainer, ScrollTextHolder, ScrollText } from "./index.styled";
import Marquee from 'react-fast-marquee';

interface wordsInterface {
    character : string,
    word : string
}
// JSX Component
const Scroll = () : JSX.Element => {
    const words:wordsInterface[]= [
    ]
    return (
      <ScrollContainer>
       <ScrollTextHolder>
           <Marquee gradient={false} speed={25} pauseOnClick={true} pauseOnHover={true}>
          {
              words.map((each, i) => (
                 <ScrollText key={i}>
                 <span>{each?.word}</span>
                 <span>{each?.character}</span>
                 </ScrollText>
              )) 
           }
         </Marquee>
       </ScrollTextHolder>
      </ScrollContainer>
    )
}

export default Scroll;
import { HeroParagraphType } from "types/interfaces";
import { ParagraphContainer } from "./styled";

const Paragraph = ({color, columns = 1, highlightColor, size, children} : HeroParagraphType) => (
    <ParagraphContainer 
        columns = {columns}
        color = {color}
        highlightColor = {highlightColor}
        size = {size}
        dangerouslySetInnerHTML = {{__html: children}}
    />
);

export default Paragraph;
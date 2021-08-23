import { SetYearFromString } from "utils";
import { ExperienceProps } from "types/interfaces";
import Headline from "components/Headline";
import Paragraph from "components/Paragraph";
import { ExperienceItemContainer, ExperienceItemContent } from "./styled";

const ExperienceItem = ({company, country, position, years, description} : ExperienceProps) => {
    return (
        <ExperienceItemContainer>
            <ExperienceItemContent>
                <Headline typeHeadline="h5" children={position}  />
                    <Paragraph size={0.9} children={`${company}, ${country}`} />
                    <Paragraph 
                    size={0.9} 
                    children={`${SetYearFromString(`${years.first}`)}
                     ${years.last && ` - ${SetYearFromString(`${years.last}`)}`}`} />
                    <Paragraph size={0.9} children={`${description}`} />
            </ExperienceItemContent>
        </ExperienceItemContainer>
    )
}

export default ExperienceItem;
import { Icon, Text } from "@/ui";
import { LINKS_LIST } from "./constants";
import { ItemList, StyledListLinks } from "./StyledLinksList";

export const LinksList = () => {
  return (
    <StyledListLinks>
      {LINKS_LIST.map(({ href, id, NetworkIcon, networkName }) => (
        <ItemList key={id}>
          <a href={href} target="_blank">
            <Icon svg={NetworkIcon} className="networkIcon" size={40} color="black" />
            <Text fontSize="l" color="secondary" className="networkName">
              {networkName}
            </Text>
          </a>
        </ItemList>
      ))}
    </StyledListLinks>
  );
};
